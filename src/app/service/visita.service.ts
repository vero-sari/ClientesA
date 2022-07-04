import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { visita } from "../models/visita";
@Injectable({
    providedIn: 'root'
  })
  export class VisitaService{
    _url="localhost:9898/ListaVisitas"

    constructor(
        private http: HttpClient
      ) { }

    getVisitas():Observable<visita[]>{
        let header = new HttpHeaders()
        .set('Type-content','aplication/json')
        return this.http.get<visita[]>(this._url,{
            headers: header
        });
  }
}