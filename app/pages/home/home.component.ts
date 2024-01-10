import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private auth: AuthService) { }
  

  ngOnInit(): void {
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
}
