import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from '../models/Cliente';


import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-gestion-clientes',
  templateUrl: './gestion-clientes.component.html',
  styleUrls: ['./gestion-clientes.component.css']
})
export class GestionClientesComponent implements OnInit {
formCliente:FormGroup;
clientes: Cliente[];
cliente: Cliente=new Cliente();
    
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private clienteService:ClienteService
   ) { }

  ngOnInit(): void {
    this.cliente=new Cliente();
   this.listaClientes();
  }
  listaClientes(){
    this.clienteService.getClientes().subscribe((resp: any)=>{
      console.log(resp.data)
      this.cliente = resp.data
    }
    )
  }


}
