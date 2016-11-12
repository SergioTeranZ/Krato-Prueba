import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

import {ComerciosService} from '../../providers/comercios-service';

@Component({
  templateUrl: 'krato.html',
  providers:[ComerciosService],
})
export class KratoPage {
  selectedItem: any;
  icons: string[];
  comercio: string[];
  sector: string;
  comercios: Array<{nombre: string, sector: string, logo: string,rating: number, descripcion: string}>;
  comercios_json: any;

  constructor(public ComerciosService:ComerciosService,public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.loadComercios();
    console.log(this.comercios_json);
    
    this.icons = ['pizza','medkit','beer','bowtie','book','basket','globe'];
    this.comercio = ['Pizzeria','Farmacia','Licoreria','Ropa','Libreria','Mercado'];
    this.comercios = [];
    this.comercios_json = [];

    for(let i = 1; i < 11; i++) {
      this.sector = this.comercio[Math.floor(Math.random() * this.comercio.length)];
      console.log(this.sector);
      this.comercios_json.push({
        nombre: this.sector +' '+ i,
        sector: this.sector,
        logo : this.getIcon(this.sector),
        rating:  Math.floor(Math.random() * 4 + 1),
        descripcion: 'Lorem Ipsum bla bla bla bla '
      });
    }

  }

  getIcon(sector){
    switch (sector) {
      case 'Pizzeria':
        return this.icons[0]
      case 'Farmacia':
        return this.icons[1]
      case 'Licoreria':
        return this.icons[2]        
      case 'Ropa':
        return this.icons[3]
      case 'Libreria':
        return this.icons[4]
      case 'Mercado':
        return this.icons[5]                
      default:
        return this.icons[6]
    };  
  }

loadComercios(){
  this.ComerciosService.load()
  .then(data => {
    this.comercios_json = data;
  });
}

  itemTapped(event, local) {
    this.navCtrl.push(ItemDetailsPage, {
      local: local
    });
  }
}
