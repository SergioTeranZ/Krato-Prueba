import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { KratoPage } from '../pages/krato/krato';

import {ComerciosService} from '../providers/comercios-service';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';

// AF2 Settings
export const firebaseConfig = {
    apiKey: "AIzaSyCeQdNeNM-ppKKdDfMf_Bn67fhzhi_1GQ4",
    authDomain: "angularprueba-55b94.firebaseapp.com",
    databaseURL: "https://angularprueba-55b94.firebaseio.com",
    storageBucket: "angularprueba-55b94.appspot.com",
    messagingSenderId: "120586352780"
};

// IGNORE EL AUTH

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    KratoPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    KratoPage
  ],
  providers:[ComerciosService],
})
export class AppModule {}
