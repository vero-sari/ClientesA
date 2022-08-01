import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from "rxjs";

import { Router } from "@angular/router";
import Swal from 'sweetalert2';
import { Visita } from "../models/Visita";

@Injectable({
    providedIn: 'root'
  })
  export class VisitaService{
    _url="localhost:9898/apecs"
    private urlCreate: string = this._url+'/CrearVisita';
    private urlDelete: string = this._url+'/EliminarVista/{id}';
    private urlUpdate: string = this._url+'/EditarVisita/{id}';
    private urlGet :string=this._url+'ListaVisitas';
    private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })
  
    constructor(private http: HttpClient, private router: Router) { }

    getAllVisitas():Observable<Visita[]>{
        let header = new HttpHeaders()
        .set('Type-content','aplication/json')
        return this.http.get<Visita[]>(this._url,{
            headers: header
        });
  }

createVisita(doc: Visita, ced :String, id : number): Observable<Visita> {
  return this.http.post<Visita>(`${this.urlCreate}/${ced}/${id}`, doc, { headers: this.httpHeaders }).pipe(
    catchError(e => {
      Swal.fire('Error al guardar', 'NO se puede guardar la visita', 'error')
      return throwError(e);
    })
  );
}

deleteVisita(empid: String): Observable<Visita> {
  return this.http.delete<Visita>(`${this.urlDelete}/${empid}`, { headers: this.httpHeaders }).pipe(
    catchError(e => {
      Swal.fire('Error al eliminar', 'No se puede eliminar', 'error')
      return throwError(e);
    })
  );
}

updateVisita(emp: Visita, ced : String): Observable<Visita> {
  return this.http.put<Visita>(`${this.urlUpdate}/${ced}`, emp, { headers: this.httpHeaders }).pipe(
    catchError(e => {
      Swal.fire('Error al actualizar', 'NO se puede actualizar la visita', 'error')
      return throwError(e);
    })
  );
}
}