import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
// Import de firebase
//import { AngularFireModule } from 'angularfire2/index';
import { firebaseConfig } from '../enviroment/firebase.config';
import { Observable } from 'rxjs/Observable';
import {AngularFire} from "angularfire2";

/*
  Generated class for the ComerciosService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class ComerciosService {

  locales: any;
  localesJS: any;
  root: Observable<any[]>;

  constructor(public http: Http,private af: AngularFire) {
    
    this.root = af.database.list('comercios');
    
  } // Fin constructor

  filtroBusqueda(termino){
    if (termino){
      termino = termino.toLowerCase();
      return this.root.filter((x:any) => x.nombre.toLowerCase() === termino ) || this.root.filter((x:any) => x.descripcion.toLowerCase() === termino ) 
    }else{
      return this.root;
    }
  } // Fin filtroBusqueda

}
