import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { getDatabase, ref, push, set, onValue } from 'firebase/database';
import { Chart, ChartOptions, ChartData } from 'chart.js';
import { WelcomePageModule } from './welcome/welcome.module';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXYL-v3UV6zIAD0YbQwTBZqTgoxcjCve0",
  authDomain: "controlandmonitorapp.firebaseapp.com",
  projectId: "controlandmonitorapp",
  storageBucket: "controlandmonitorapp.appspot.com",
  messagingSenderId: "900507619738",
  appId: "1:900507619738:web:77a7551416c7be1d81ea23",
  measurementId: "G-YVE76J89WF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
