import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from './service/cliente.service';
import { VisitaService } from './service/visita.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'APECS';

  constructor(
    private router:Router,
     
    ) { 

  }

 
  ngOnInit(): void {
  

  
  }
}
