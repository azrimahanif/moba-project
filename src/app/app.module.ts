import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { IonicStorageModule } from '@ionic/storage';
import { Routes, RouterModule } from '@angular/router';
import { TutorialGuard } from './guards/tutorial.guard';

import {BookingPage} from './booking/booking.page' ;
import {BookingDetailsPage} from './booking-details/booking-details.page' ;
import {BookingInfoPage} from './booking-info/booking-info.page' ;
import {StaffDashboardPage} from './staff-dashboard/staff-dashboard.page' ;
import {StaffLoginPage} from './staff-login/staff-login.page';
import {WelcomePagePage} from './welcome-page/welcome-page.page';
import {FacilitiesListPage} from './facilities-list/facilities-list.page';


import { environment } from '../environments/environment';


import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';







const routes: Routes = [
  {
    path: '',
    loadChildren: './tabs/tabs.module#TabsPageModule',
    canActivate: [TutorialGuard] // <-- apply here
  },
  {
    path: 'tutorial',
    loadChildren: './tutorial/tutorial.module#TutorialPageModule'
  }
];


@NgModule({
  declarations: [AppComponent, BookingPage, BookingDetailsPage, BookingInfoPage,
    StaffDashboardPage, StaffLoginPage, WelcomePagePage, FacilitiesListPage],
  entryComponents: [BookingPage, BookingDetailsPage, BookingInfoPage,
    StaffDashboardPage, StaffLoginPage, WelcomePagePage, FacilitiesListPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
