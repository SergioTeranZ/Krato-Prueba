var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the ComerciosService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export var ComerciosService = (function () {
    function ComerciosService(http) {
        /*this.http.get('/comercios.json').map(res => res.json().comercios).subscribe(data => {
          
          this.locales = data;
    
          for(let i = 0; i <= this.locales.length -1; i++){
            this.locales[i].rating = parseInt(this.locales[i].rating);
          }
    
          console.log('-----------\n'+this.locales+'\n-----------');
          return this.locales;
        });*/
        this.http = http;
        this.locales = [
            { "nombre": "Pizz 1",
                "sector": "Pizzeria",
                "logo": "pizza",
                "rating": "5",
                "descripcion": "descripcion Rest 1"
            },
            { "nombre": "Pizz 2",
                "sector": "Pizzeria",
                "logo": "pizza",
                "rating": "5",
                "descripcion": "descripcion Rest 2"
            },
            { "nombre": "Lic 1",
                "sector": "Licoreria",
                "logo": "beer",
                "rating": "1",
                "descripcion": "descripcion Lic 1"
            },
            { "nombre": "Lic 2",
                "sector": "Licoreria",
                "logo": "beer",
                "rating": "2",
                "descripcion": "descripcion Lic 2"
            },
            { "nombre": "Lib 1",
                "sector": "Libreria",
                "logo": "book",
                "rating": "3",
                "descripcion": "descripcion Lib 1"
            },
            { "nombre": "Lib 2",
                "sector": "Libreria",
                "logo": "book",
                "rating": "1",
                "descripcion": "descripcion Lib 2"
            },
            { "nombre": "Far 1",
                "sector": "Farmacia",
                "logo": "medkit",
                "rating": "4",
                "descripcion": "descripcion Far 1"
            },
            { "nombre": "Far 2",
                "sector": "Farmacia",
                "logo": "medkit",
                "rating": "4",
                "descripcion": "descripcion Far 2"
            },
            { "nombre": "Rop 1",
                "sector": "Ropa",
                "logo": "bowtie",
                "rating": "1",
                "descripcion": "descripcion Rop 1"
            },
            { "nombre": "Rop 2",
                "sector": "Ropa",
                "logo": "bowtie",
                "rating": "3",
                "descripcion": "descripcion Rop 2"
            },
            { "nombre": "Mer 1",
                "sector": "Mercado",
                "logo": "basket",
                "rating": "4",
                "descripcion": "descripcion Mer 1"
            },
            { "nombre": "Mer 2",
                "sector": "Mercado",
                "logo": "basket",
                "rating": "5",
                "descripcion": "descripcion Mer 2"
            }
        ]; // fin locales
    } // Fin constructor
    ComerciosService.prototype.filtroBusqueda = function (termino) {
        return this.locales.filter(function (local) {
            return local.nombre.toLowerCase().indexOf(termino.toLowerCase()) > -1;
        });
    };
    ComerciosService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http])
    ], ComerciosService);
    return ComerciosService;
}());
//# sourceMappingURL=comercios-service.js.map