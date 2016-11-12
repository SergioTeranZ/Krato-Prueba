import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

import {ComerciosService} from '../../providers/comercios-service';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'krato.html',
  providers:[ComerciosService],
})
export class KratoPage {
  selectedItem: any;
  comercios_json: any;

  constructor(public http: Http,public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    //this.loadComercios();

    this.http.get('/comercios.json')
    .map(res => res.json())
    .subscribe(data => { this.comercios_json = data.comercios;});
  }


  getNumber(numero){
    console.log(numero)
    return new Array[numero];
  }
/*loadComercios(){
  this.ComerciosService.load()
  .then(data => {
    this.comercios_json = data;
  });
}
*/
  itemTapped(event, local) {
    this.navCtrl.push(ItemDetailsPage, {
      local: local
    });
  }
}
