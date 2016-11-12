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
import { NavController, NavParams } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';
import { ComerciosService } from '../../providers/comercios-service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
export var KratoPage = (function () {
    function KratoPage(http, navCtrl, navParams) {
        var _this = this;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        //this.loadComercios();
        this.http.get('/comercios.json')
            .map(function (res) { return res.json().comercios; })
            .subscribe(function (data) {
            _this.comercios_json = data;
            //for (let i =0 ; i <=this.comercios_json.length;i++){
            //  console.log(this.comercios_json[i].rating);
            //}
            console.log(_this.comercios_json);
            for (var i = 0; i <= _this.comercios_json.length - 1; i++) {
                estrellas = Array(parseInt(_this.comercios_json[i].rating));
                _this.comercios_json[i].rating = parseInt(_this.comercios_json[i].rating);
            }
        });
    }
    KratoPage.prototype.getNumber = function (numero) {
        console.log(numero);
        return new Array[numero];
    };
    /*loadComercios(){
      this.ComerciosService.load()
      .then(data => {
        this.comercios_json = data;
      });
    }
    */
    KratoPage.prototype.itemTapped = function (event, local) {
        this.navCtrl.push(ItemDetailsPage, {
            local: local
        });
    };
    KratoPage = __decorate([
        Component({
            templateUrl: 'krato.html',
            providers: [ComerciosService],
        }), 
        __metadata('design:paramtypes', [Http, NavController, NavParams])
    ], KratoPage);
    return KratoPage;
}());
//# sourceMappingURL=krato.js.map