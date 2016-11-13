import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';
import { ComerciosService } from '../../providers/comercios-service'

import 'rxjs/add/operator/debounceTime';
/*
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
*/
@Component({
  templateUrl: 'krato.html',
  providers:[],
})
export class KratoPage {
  // Mostrar detalles
  selectedItem: any;
  // Leer de json
  comercios_json: any;
  // Crear arreglo de estrellas
  ratings: any;
  // Barra de Busqueda
  termino: string= '';
  controlBusqueda: FormControl;
  searching: any = false;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public ComerciosService: ComerciosService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    // Inicializo arreglo de estrellas
    this.ratings = [];

    this.controlBusqueda = new FormControl();
    /*this.http.get('/comercios.json')
    .map(res => res.json().comercios)
    .subscribe(data => { 
      this.comercios_json = data; 

      for(let i = 0; i <= this.comercios_json.length -1; i++){
        this.comercios_json[i].rating = parseInt(this.comercios_json[i].rating);
      }
    });*/

  }
  
  ionViewDidLoad() {
    this.setFilteredItems();

    this.controlBusqueda.valueChanges.debounceTime(700).subscribe(search => {
            this.searching = false;
            this.setFilteredItems();
        });    
  }

    onSearchInput(){
        this.searching = true;
    }
  
  setFilteredItems() {
    this.comercios_json = this.ComerciosService.filterItems(this.termino);
  }
    


  getNumber(numero){
    this.ratings = [];
    for (let i = 0 ; i <= numero -1; i++){
    this.ratings.push(i);
    }
    return this.ratings;
  }

  itemTapped(event, local) {
    this.navCtrl.push(ItemDetailsPage, {
      local: local
    });
  }
}