import { Component, OnInit } from '@angular/core';
import { ReservationDataService } from 'src/app/shared/reservation-data.service';
import { Reservation } from 'src/app/shared/reservation.service';
import { ReservationService } from 'src/app/shared/reservation.service';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})
export class ClientComponent implements OnInit {
  reservations: Reservation[] = [];
  editedReservation: Reservation = {} as Reservation;

  constructor(
    private reservationDataService: ReservationDataService,
    private reservationService: ReservationService,
    private router: Router, private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.loadReservations();
    this.subscribeToReservationUpdates();
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('userProfile');
  }

  getUserDisplayName(): string {
    const userProfile = JSON.parse(localStorage.getItem('userProfile') || '{}');
    if (userProfile.displayName) {
      return this.capitalizeFirstLetter(userProfile.displayName);
    } else if (userProfile.email) {
      // Extract the part of the email before the "@" symbol as the name
      const name = userProfile.email.split('@')[0];
      return this.capitalizeFirstLetter(name);
    } else {
      return 'User';
    }
  }

  capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  logout() {
    this.auth.logout();
  }
  private loadReservations(): void {
    this.reservationService.getReservations().subscribe((reservations) => {
      this.reservations = reservations;
      this.reservationDataService.updateReservationsData(reservations);
    });
  }

  private subscribeToReservationUpdates(): void {
    this.reservationService.getReservations().subscribe((reservations) => {
      this.reservations = reservations;
      this.reservationDataService.updateReservationsData(reservations);
    });
  }

  editReservation(reservation: Reservation): void {
    // Clone the reservation object to avoid changing the original data directly
    this.editedReservation = { ...reservation };
    // Open the modal
    const modal = document.getElementById('editModal');
    if (modal) {
      modal.style.display = 'block';
    }
  }

  async saveEditedReservation(): Promise<void> {
    if (this.editedReservation.id) {
      try {
        await this.reservationService.updateReservation(this.editedReservation.id, this.editedReservation);
        // Close the modal
        this.closeModal();
      } catch (error) {
        console.error('Error updating reservation:', error);
      }
    }
  }

  deleteReservation(reservation: Reservation): void {
    if (reservation.id) {
      this.reservationService.deleteReservation(reservation.id).then(() => {
        // Remove the deleted reservation from the array
        this.reservations = this.reservations.filter((r) => r.id !== reservation.id);
        this.reservationDataService.updateReservationsData(this.reservations);
      });
    }
  }

  closeModal(): void {
    // Close the modal
    const modal = document.getElementById('editModal');
    if (modal) {
      modal.style.display = 'none';
    }
    // Clear the edited reservation data
    this.editedReservation = {} as Reservation;
  }
}
