import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/login/login";

import { AngularFireModule } from "angularfire2";
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { AngularFireAuth } from 'angularfire2/auth';

import { Facebook } from "@ionic-native/facebook";

export const firebaseConfig = {
  apiKey: "AIzaSyDSX5-0dq5NVxKIzmwckNVwx9ETdJbfcBE",
  authDomain: "ionicfirebaseauth-d558f.firebaseapp.com",
  databaseURL: "https://ionicfirebaseauth-d558f.firebaseio.com",
  storageBucket: "ionicfirebaseauth-d558f.appspot.com",
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    AngularFireAuth,
    AngularFireModule,
    Facebook
  ]
})
export class AppModule {}
