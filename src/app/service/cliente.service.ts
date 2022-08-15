import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";
import { Cliente } from "../models/Cliente";
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  _url = "localhost:9898"
  private urlCreate: string = this._url + '/CrearCliente';
  private urlDelete: string = this._url + '/EliminarCliente/{id}';
  private urlUpdate: string = this._url + '/EditarCliente/{id}';
  private urlGet :string=this._url +'/ListaClientes';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient, private router: Router) { }

get(id:any):Observable<Cliente>{
  return this.http.get<Cliente>(this._url);
}
  getClientes(): Observable<Cliente[]> {
    let header = new HttpHeaders()
      .set('Type-content', 'aplication/json')
    return this.http.get<Cliente[]>(this.urlGet, {
      headers: header
    });
  }
  createCliente(doc: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.urlCreate}`, doc, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        Swal.fire('Error al guardar', 'NO se puede guardar al cliente', 'error')
        return throwError(e);
      })
    );
  }

  deleteCliente(empid: String): Observable<Cliente> {
    return this.http.delete<Cliente>(`${this.urlDelete}/${empid}`, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        Swal.fire('Error al eliminar', 'No se puede eliminar', 'error')
        return throwError(e);
      })
    );
  }

  updateCliente( id: any): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.urlUpdate}/${id}`, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        Swal.fire('Error al actualizar', 'NO se puede actualizar el cliente', 'error')
        return throwError(e);
      })
    );
  }
}