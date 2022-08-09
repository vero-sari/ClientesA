import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../models/Cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-gestion-clientes',
  templateUrl: './gestion-clientes.component.html',
  styleUrls: ['./gestion-clientes.component.css']
})  
export class GestionClientesComponent implements OnInit {
 cliente:Cliente=new Cliente();
 titulo:string="Registro Cliente";
  clientes:Cliente[]=[];
  constructor(
    private clienteService:ClienteService,
  private router:Router
   ) { }

  ngOnInit(): void {
 
  }

create():void{
  console.log(this.cliente);
  this.clienteService.createCliente(this.cliente).subscribe(
    res=>this.router.navigate(['/CrearCliente'])
  );
}

}
