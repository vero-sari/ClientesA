import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";
import { cliente } from "../models/cliente";
import { visita } from "../models/visita";
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  _url = "localhost:9898/apecs"
  private urlCreate: string = this._url + '/CrearCliente';
  private urlDelete: string = this._url + '/EliminarCliente/{id}';
  private urlUpdate: string = this._url + '/EditarCliente/{id}';
  private urlGet :string=this._url +'/ListaClientes';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient, private router: Router) { }


  getClientes(): Observable<cliente[]> {
    let header = new HttpHeaders()
      .set('Type-content', 'aplication/json')
    return this.http.get<cliente[]>(this.urlGet, {
      headers: header
    });
  }
  createCliente(doc: cliente, ced: String, id: number): Observable<cliente> {
    return this.http.post<cliente>(`${this.urlCreate}/${ced}/${id}`, doc, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        Swal.fire('Error al guardar', 'NO se puede guardar al cliente', 'error')
        return throwError(e);
      })
    );
  }

  deleteCliente(empid: String): Observable<cliente> {
    return this.http.delete<cliente>(`${this.urlDelete}/${empid}`, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        Swal.fire('Error al eliminar', 'No se puede eliminar', 'error')
        return throwError(e);
      })
    );
  }

  updateCliente(emp: cliente, ced: String): Observable<cliente> {
    return this.http.put<cliente>(`${this.urlUpdate}/${ced}`, emp, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        Swal.fire('Error al actualizar', 'NO se puede actualizar el cliente', 'error')
        return throwError(e);
      })
    );
  }
}