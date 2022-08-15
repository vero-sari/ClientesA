
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Visita } from '../models/Visita';
import { VisitaService } from '../service/visita.service';

@Component({
  selector: 'app-gestion-visitas',
  templateUrl: './gestion-visitas.component.html',
  styleUrls: ['./gestion-visitas.component.css']
})
export class GestionVisitasComponent implements OnInit {
visita:Visita=new Visita();
visitas:Visita[]=[];
  constructor(
    private visitaService:VisitaService,
    private router:Router,
    private activateRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.cargar
    this.create
  }
  create():void{
    console.log(this.visita);
    this.visitaService.createVisita(this.visita).subscribe(
      res=>this.router.navigate(['/CrearVisita'])
    );
  }
  update():void{
    this.visitaService.updateVisita(this.visita).subscribe(
      res=>this.router.navigate(['/CrearCliente'])
    );
  }
  cargar():void{
  this.activateRoute.params.subscribe(
    e=>{
      let id=e['id'];
      if(id){
        this.visitaService.get(id).subscribe(
          es=>this.visita=es
        );
      }
    }
  );
  }
}
