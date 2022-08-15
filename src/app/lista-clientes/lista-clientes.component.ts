import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/Cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {
  clientes:Cliente[]=[];
  constructor(
    private clienteService:ClienteService
  
  ) { }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(
      c =>this.clientes=c
     );
  }
delete(cliente:Cliente):void{
console.log("Eliminar");
this.clienteService.deleteCliente(cliente.id).subscribe(
  res=>this.clienteService.getClientes().subscribe(
response=>this.clientes=response
  )
);
}
}
