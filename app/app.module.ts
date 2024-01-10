import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { ClientComponent } from './pages/client/client.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/app/environments/environment.prod';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { MatTableModule } from '@angular/material/table';
import { ReservationService } from './shared/reservation.service';
import { ReservationDataService } from './shared/reservation-data.service';
import { DashboardComponent } from './administrator/dashboard/dashboard.component';
import { AdminReservationComponent } from './administrator/admin-reservation/admin-reservation.component';
import { AdminRoomComponent } from './administrator/admin-room/admin-room.component';
import { AdminUserComponent } from './administrator/admin-user/admin-user.component';
import { SettingComponent } from './administrator/setting/setting.component';
import { AdminAuthService } from 'src/app/shared/admin-auth.service';
import { PaymentComponent } from './administrator/payment/payment.component';
import { AdminProfileComponent } from './administrator/admin-profile/admin-profile.component';
import { DestinationComponent } from './pages/destination/destination.component';
import { AdminHomeComponent } from './administrator/admin-home/admin-home.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    RoomsComponent,
    ClientComponent,
    AdminProfileComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ReservationComponent,
    DashboardComponent,
    AdminReservationComponent,
    AdminRoomComponent,
    AdminUserComponent,
    SettingComponent,
    PaymentComponent,
    ProfileComponent,
    DestinationComponent,
    AdminHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    MatTableModule,
  ],
  providers: [ReservationService, ReservationDataService, AdminAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
