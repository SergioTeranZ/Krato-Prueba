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
  estrellas: string[];
  ratings: any;
  constructor(public http: Http,public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    
    this.ratings = [];

    this.http.get('/comercios.json')
    .map(res => res.json().comercios)
    .subscribe(data => { 
      this.comercios_json = data; 

      for(let i = 0; i <= this.comercios_json.length -1; i++){
        this.comercios_json[i].rating = parseInt(this.comercios_json[i].rating);
      }
    });
    
  }


  getNumber(numero){
    this.ratings = [];
    for (let i = 0 ; i <= numero -1; i++){
    this.ratings.push(i);
    }
    return this.ratings;
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
