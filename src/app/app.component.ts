import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar } from 'ionic-native';

import { KratoPage } from '../pages/krato/krato';

//import * as firebase from 'firebase';
import {  FIREBASE_PROVIDERS, 
          defaultFirebase,
          AngularFire,
          AuthMethods,
          AuthProviders,
          firebaseAuthConfig} from 'angularfire2';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = KratoPage;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,public menu: MenuController){
    

    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCeQdNeNM-ppKKdDfMf_Bn67fhzhi_1GQ4",
      authDomain: "angularprueba-55b94.firebaseapp.com",
      databaseURL: "https://angularprueba-55b94.firebaseio.com",
      storageBucket: "angularprueba-55b94.appspot.com",
      messagingSenderId: "120586352780"
    };
    firebase.initializeApp(config);

    this.initializeApp();

    // Arreglo de pagians en la aplicacion
    this.pages = [
      { title: 'Krato App', component: KratoPage }
    ];

  } // fin constructor

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
