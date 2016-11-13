import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/bundles/Rx';
//import { AngularFireModule } from 'angularfire2';

/*
  Generated class for the ComerciosService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

//var firebaseObj = new Firebase("https://jose.firebaseio.com");

@Injectable()
export class ComerciosService {

  locales: any;
  localesJS: any;

  constructor(public http: Http) {

    this.locales = [
                    {"nombre":"Pizz 1", 
                     "sector":"Pizzeria",
                     "logo":"pizza",
                     "rating":"1",
                     "descripcion":"descripcion Rest 1"
                    },

                    {"nombre":"Pizz 2", 
                     "sector":"Pizzeria",
                     "logo":"pizza",
                     "rating":"5",
                     "descripcion":"descripcion Rest 2"
                    },

                    {"nombre":"Lic 1", 
                     "sector":"Licoreria",
                     "logo":"beer",
                     "rating":"1",
                     "descripcion":"descripcion Lic 1"
                    },

                    {"nombre":"Lic 2", 
                     "sector":"Licoreria",
                     "logo":"beer",
                     "rating":"2",
                     "descripcion":"descripcion Lic 2"
                    },

                    {"nombre":"Lib 1", 
                     "sector":"Libreria",
                     "logo":"book",
                     "rating":"3",
                     "descripcion":"descripcion Lib 1"
                    },

                    {"nombre":"Lib 2", 
                     "sector":"Libreria",
                     "logo":"book",
                     "rating":"1",
                     "descripcion":"descripcion Lib 2"
                    },

                    {"nombre":"Far 1", 
                     "sector":"Farmacia",
                     "logo":"medkit",
                     "rating":"4",
                     "descripcion":"descripcion Far 1"
                    },   

                    {"nombre":"Far 2", 
                     "sector":"Farmacia",
                     "logo":"medkit",
                     "rating":"4",
                     "descripcion":"descripcion Far 2"
                    },       

                    {"nombre":"Rop 1", 
                     "sector":"Ropa",
                     "logo":"bowtie",
                     "rating":"1",
                     "descripcion":"descripcion Rop 1"
                    },

                    {"nombre":"Rop 2", 
                     "sector":"Ropa",
                     "logo":"bowtie",
                     "rating":"3",
                     "descripcion":"descripcion Rop 2"
                    },

                    {"nombre":"Mer 1", 
                     "sector":"Mercado",
                     "logo":"basket",
                     "rating":"4",
                     "descripcion":"descripcion Mer 1"
                    },

                    {"nombre":"Mer 2", 
                     "sector":"Mercado",
                     "logo":"basket",
                     "rating":"5",
                     "descripcion":"descripcion Mer 2"
                    }
    ] // fin locales
    
    this.localesJS = [];
    
    this.http.get('/comercios.json')
      .subscribe(res => {this.localesJS = res.json().comercios;console.log(">"+this.localesJS);});
    console.log(">>"+this.localesJS);

  } // Fin constructor

  filtroBusqueda(termino){
    return this.locales.filter((local) => {
      return local.nombre.toLowerCase().indexOf(termino.toLowerCase()) > -1 || local.descripcion.toLowerCase().indexOf(termino.toLowerCase()) > -1;
    });
  } // Fin filtroBusqueda

  filtroSector(sector){
    return this.locales.filter((local) =>{
      return local.sector.toLowerCase().indexOf(sector.toLowerCase()) > -1;
    });
  } // fin filtroSector
}
