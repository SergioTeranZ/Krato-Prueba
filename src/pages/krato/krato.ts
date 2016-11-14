import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavController, NavParams, reorderArray } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';
import { ComerciosService } from '../../providers/comercios-service'

import { Observable } from 'rxjs/Observable';
import {AngularFire} from "angularfire2";

import 'rxjs/add/operator/debounceTime';
/*
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
*/
@Component({
  templateUrl: 'krato.html',
  providers:[ComerciosService],
})
export class KratoPage {
  // Mostrar detalles
  selectedItem: any;
  
  // Leer de json
  comercios_json: any;
  comercios_json2: any;
  
  // Crear arreglo de estrellas
  ratings: any;

  // Barra de Busqueda
  termino: string= '';
  sector: string= '';
  controlBusqueda: FormControl;
  buscando: any = false;
  root: any;
  comerPrueba: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ComerciosService: ComerciosService,public af:AngularFire ) {
    
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    //this.root = firebase.database()
    //.ref('comercios')
    
    this.comerPrueba = af.database.list('comercios');

    this.comerPrueba.subscribe(function(snap){ console.log(snap)});
    
    // Barra de busqueda
    this.controlBusqueda = new FormControl();
  
  } // fin contructor
  
  getData(snap){
    var p = snap.val();
    return p;
  }

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
    this.comercios_json.sort(function(a, b) {
      var ratingA = a.rating.toUpperCase();
      var ratingB = b.rating.toUpperCase();
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
    this.comercios_json.sort(function(a, b) {
      var ratingA = a.rating.toUpperCase();
      var ratingB = b.rating.toUpperCase();
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