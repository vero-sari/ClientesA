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

}
