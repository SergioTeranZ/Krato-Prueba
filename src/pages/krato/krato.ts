import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavController, NavParams, reorderArray } from 'ionic-angular';

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
  sector: string= '';
  controlBusqueda: FormControl;
  controlSector: FormControl;
  buscando: any = false;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public ComerciosService: ComerciosService) {
    
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Barra de busqueda
    this.controlBusqueda = new FormControl();
  } // fin contructor
  
  ionViewDidLoad() {
    this.localesFiltrados();
    this.localesFiltradosSector(this.termino);

    this.controlBusqueda.valueChanges.debounceTime(700).subscribe(search => {
            this.buscando = false;
            this.localesFiltrados();
        });    
  } // fin ViewDidLoad

  mientrasEscribe(){
      this.buscando = true;
  } // fin mientrasEscribe

  localesFiltrados() {
    this.sector = '';
    this.comercios_json = this.ComerciosService.filtroBusqueda(this.termino);
  } // fin localesFiltrados
    
  localesFiltradosSector(termino) {
    this.localesFiltrados();
    this.sector = termino;
    this.comercios_json = this.ComerciosService.filtroSector(termino);
  } // fin localesFiltradosSector

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
  } // Fin itemTapped

  reorderItems(indexes){
      this.comercios_json = reorderArray(this.comercios_json, indexes);
  }

  orderMenor(){
    console.log(this.comercios_json);
    this.comercios_json.sort(function(a, b) {
      var ratingA = a.rating.toUpperCase(); // ignore upper and lowercase
      var ratingB = b.rating.toUpperCase(); // ignore upper and lowercase
      if (ratingA < ratingB) {
        return -1;
      }
      if (ratingA > ratingB) {
        return 1;
      }

      // names must be equal
      return 0;
    })
  } // Fin orderMayor

  orderMayor(){
    console.log(this.comercios_json);
    this.comercios_json.sort(function(a, b) {
      var ratingA = a.rating.toUpperCase(); // ignore upper and lowercase
      var ratingB = b.rating.toUpperCase(); // ignore upper and lowercase
      if (ratingA > ratingB) {
        return -1;
      }
      if (ratingA < ratingB) {
        return 1;
      }

      // names must be equal
      return 0;
    })
  } // Fin orderMayor

}