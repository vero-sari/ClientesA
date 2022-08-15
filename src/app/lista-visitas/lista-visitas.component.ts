import { Component, OnInit } from '@angular/core';
import { Visita } from '../models/Visita';
import { VisitaService } from '../service/visita.service';

@Component({
  selector: 'app-lista-visitas',
  templateUrl: './lista-visitas.component.html',
  styleUrls: ['./lista-visitas.component.css']
})
export class ListaVisitasComponent implements OnInit {
visitas:Visita[]=[];
  constructor(
    private visitaService:VisitaService
  ) { }

  ngOnInit(): void {
    this.visitaService.getAllVisitas().subscribe(
      v=>this.visitas=v
    );

  }
delete(visita:Visita):void{
console.log("Eliminar");
this.visitaService.deleteVisita(visita.idvisita).subscribe(
  res=>this.visitaService.getAllVisitas().subscribe(
response=>this.visitas=response
  )
);
}
}
