import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-gestion-clientes',
  templateUrl: './gestion-clientes.component.html',
  styleUrls: ['./gestion-clientes.component.css']
})
export class GestionClientesComponent implements OnInit {
  cliente: any;
formCliente:any;
  constructor(
    
    private formBuilder: FormBuilder,
    private clienteservice:ClienteService
  ) { }

  ngOnInit(): void {
    this.formCliente = this.formBuilder.group({
    cedula: ['', Validators.required],
    primerNombre: ['', Validators.required],
    segundoNombre: ['', Validators.required],
    primerApellido: ['', Validators.required],
    segundoApellido: ['', Validators.required],
    telefono: ['', Validators.required],
    direccion: ['', Validators.required],
    });  
  }

}
