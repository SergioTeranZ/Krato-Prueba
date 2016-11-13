
/*import {Injectable} from 'angular2/core';*/
/*import {Http} from "angular2/http";*/
/*import {last} from "rxjs/operator/last";*/
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class FirebaseService {

    constructor(private _http: Http) {}

    setComercio(nombre: string, sector: string) {
        const body = JSON.stringify({nombre: nombre, sector: sector});
        return this._http.put('https://angularprueba-55b94.firebaseio.com/Comercio.json', body)
            .map(response => response.json());
    }

    getComercio() {
        return this._http.get('https://angularprueba-55b94.firebaseio.com/Comercio.json')
        .map(response => response.json());
    }
}