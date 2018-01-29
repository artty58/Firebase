import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
// for AngularFireDatabase
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpClient } from '@angular/common/http/src/client';
import { HttpClientModule } from '@angular/common/http';
import { DatabaseProvider } from '../providers/database/database';
import { AngularFireAuthModule } from 'angularfire2/auth';



@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({ apiKey: "AIzaSyCtVZulIe_PV-0wsoTsnJypWwwhUk0_RP8",
    authDomain: "art-firebase.firebaseapp.com",
    databaseURL: "https://art-firebase.firebaseio.com",
    projectId: "art-firebase",
    storageBucket: "art-firebase.appspot.com",
    messagingSenderId: "97390228063"}),  
    AngularFireDatabaseModule,
    AngularFireAuthModule

        
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    DatabaseProvider,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
