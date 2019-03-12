import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome-page',
    pathMatch: 'full'
  },
  {
    path: 'booking',
    loadChildren: './booking/booking.module#BookingPageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'welcome-page', loadChildren: './welcome-page/welcome-page.module#WelcomePagePageModule' },
  { path: 'facilities-list', loadChildren: './facilities-list/facilities-list.module#FacilitiesListPageModule' },
  { path: 'booking-info', loadChildren: './booking-info/booking-info.module#BookingInfoPageModule' },
  { path: 'booking', loadChildren: './booking/booking.module#BookingPageModule' },
  { path: 'booking-details', loadChildren: './booking-details/booking-details.module#BookingDetailsPageModule' },
  { path: 'staff-login', loadChildren: './staff-login/staff-login.module#StaffLoginPageModule' },
  { path: 'staff-dashboard', loadChildren: './staff-dashboard/staff-dashboard.module#StaffDashboardPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
