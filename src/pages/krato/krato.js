var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';
import { ComerciosService } from '../../providers/comercios-service';
import 'rxjs/add/operator/debounceTime';
/*
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
*/
export var KratoPage = (function () {
    function KratoPage(navCtrl, navParams, ComerciosService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ComerciosService = ComerciosService;
        // Barra de Busqueda
        this.termino = '';
        this.searching = false;
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
    KratoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.mostrarLocalesFiltrados();
        this.controlBusqueda.valueChanges.debounceTime(700).subscribe(function (search) {
            _this.searching = false;
            _this.setFilteredItems();
        });
    };
    KratoPage.prototype.mientrasEscribe = function () {
        this.searching = true;
    };
    KratoPage.prototype.setFilteredItems = function () {
        this.comercios_json = this.ComerciosService.filtroBusqueda(this.termino);
    };
    KratoPage.prototype.getNumber = function (numero) {
        this.ratings = [];
        for (var i = 0; i <= numero - 1; i++) {
            this.ratings.push(i);
        }
        return this.ratings;
    };
    KratoPage.prototype.itemTapped = function (event, local) {
        this.navCtrl.push(ItemDetailsPage, {
            local: local
        });
    };
    KratoPage = __decorate([
        Component({
            templateUrl: 'krato.html',
            providers: [],
        }), 
        __metadata('design:paramtypes', [NavController, NavParams, ComerciosService])
    ], KratoPage);
    return KratoPage;
}());
//# sourceMappingURL=krato.js.map