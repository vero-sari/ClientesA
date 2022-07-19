import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'APECS';

  constructor(private router:Router) { 

  }

  gestionCliente(){
    this.router.navigate(['/gestion-clientes']);
    console.log('hola');

  }
  ngOnInit(): void {
      
  }
}
