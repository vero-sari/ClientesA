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
  private router:Router,
  private activateRoute:ActivatedRoute
   ) { }

  ngOnInit(): void {
 this.cargar();
 
  }

create():void{
  console.log(this.cliente);
  this.clienteService.createCliente(this.cliente).subscribe(
    res=>this.router.navigate(['/CrearCliente'])
  );
}
update():void{
  this.clienteService.updateCliente(this.cliente).subscribe(
    res=>this.router.navigate(['/CrearCliente'])
  );
}
cargar():void{
this.activateRoute.params.subscribe(
  e=>{
    let id=e['id'];
    if(id){
      this.clienteService.get(id).subscribe(
        es=>this.cliente=es
      );
    }
  }
);
}
}
