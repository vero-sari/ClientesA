import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { visita } from "../models/visita";

@Injectable({
    providedIn: 'root'
  })
  export class ClienteService{
    _url="localhost:9898/ListaClientes"

    constructor(
    private http: HttpClient
    ){}

    getClientes():Observable<visita[]>{
        let header = new HttpHeaders()
        .set('Type-content','aplication/json')
        return this.http.get<visita[]>(this._url,{
            headers: header
        });
  }
  }