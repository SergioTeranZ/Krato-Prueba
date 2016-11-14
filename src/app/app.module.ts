import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { KratoPage } from '../pages/krato/krato';

import {ComerciosService} from '../providers/comercios-service';
// Import de firebase
import { AngularFireModule } from 'angularfire2/index';
import { firebaseConfig } from '../enviroment/firebase.config';


@NgModule({
  declarations: [
    MyApp,
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
    ItemDetailsPage,
    ListPage,
    KratoPage
  ],
  
  providers:[
  	ComerciosService,
  	],
})
export class AppModule {}
