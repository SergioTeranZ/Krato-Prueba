import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
//import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { KratoPage } from '../pages/krato/krato';

import {ComerciosService} from '../providers/comercios-service';

// Import the AF2 Module
import { FIREBASE_PROVIDERS, defaultFirebase,AngularFire,AuthMethods,AuthProviders,firebaseAuthConfig} from 'angularfire2';

@NgModule({
  declarations: [
    MyApp,
    ItemDetailsPage,
    ListPage,
    KratoPage
  ],

  imports: [
    IonicModule.forRoot(MyApp)
  ],

  bootstrap: [IonicApp],
  
  entryComponents: [
    MyApp,
    ItemDetailsPage,
    ListPage,
    KratoPage
  ],
  
  providers:[
  	ComerciosService,
  	FIREBASE_PROVIDERS,
  	defaultFirebase(
  		{	apiKey: "AIzaSyCeQdNeNM-ppKKdDfMf_Bn67fhzhi_1GQ4",
    		authDomain: "angularprueba-55b94.firebaseapp.com",
    		databaseURL: "https://angularprueba-55b94.firebaseio.com",
    		storageBucket: "angularprueba-55b94.appspot.com"}),
  	firebaseAuthConfig({
  		provider:AuthProviders.Password,
  		method: AuthMethods.Password
  	})],
})
export class AppModule {}
