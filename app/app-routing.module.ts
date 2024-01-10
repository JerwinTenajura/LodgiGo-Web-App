import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { ClientComponent } from './pages/client/client.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { AuthGuard } from 'src/app/shared/auth.guard';
import { DashboardComponent } from './administrator/dashboard/dashboard.component';
import { AdminReservationComponent } from './administrator/admin-reservation/admin-reservation.component';
import { SettingComponent } from './administrator/setting/setting.component';
import { AdminUserComponent } from './administrator/admin-user/admin-user.component';
import { AdminRoomComponent } from './administrator/admin-room/admin-room.component';
import { AdminComponent } from './administrator/admin/admin.component';
import { PaymentComponent } from './administrator/payment/payment.component';
import { AdminProfileComponent } from './administrator/admin-profile/admin-profile.component';
import { DestinationComponent } from './pages/destination/destination.component';
import { BookingComponent } from './pages/booking/booking.component';
import { AdminHomeComponent } from './administrator/admin-home/admin-home.component';

const routes: Routes = [
  {
    path: '', redirectTo:'login', pathMatch:'full'
  },
  {
    path: 'rooms',
    component: RoomsComponent
  },
  {
    path: 'client',
    component: ClientComponent
  },
  {
    path: 'destination',
    component: DestinationComponent
  },
  {
    path: 'booking',
    component: BookingComponent
  },
  {
    path: 'reservation',
    component: ReservationComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'admin-reservation',
    component: AdminReservationComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'settings',
    component: SettingComponent
  }, 
  {
    path: 'admin-user',
    component: AdminUserComponent
  },
  {
    path: 'admin-room',
    component: AdminRoomComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  },
  {
    path: 'setting',
    component: SettingComponent
  },
  {
    path: 'admin-profile',
    component: AdminProfileComponent
  },
  {
    path: 'admin-home',
    component: AdminHomeComponent
  },
    // ... other routes ...
    { path: 'reservation', component: ReservationComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
