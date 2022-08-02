import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-gestion-clientes',
  templateUrl: './gestion-clientes.component.html',
  styleUrls: ['./gestion-clientes.component.css']
})  
export class GestionClientesComponent implements OnInit {

    
  constructor(
    
   ) { }

  ngOnInit(): void {
  
  }
  listaClientes(){
   
   
  }


}
