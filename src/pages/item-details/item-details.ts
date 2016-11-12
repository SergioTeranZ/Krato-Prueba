import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;
  ratings: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('local');
  }

    getNumber(numero){
    this.ratings = [];
    for (let i = 0 ; i <= numero -1; i++){
    this.ratings.push(i);
    }
    return this.ratings;
  }
}
