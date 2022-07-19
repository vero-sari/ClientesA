import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionClientesComponent } from './gestion-clientes/gestion-clientes.component';
import { GestionVisitasComponent } from './gestion-visitas/gestion-visitas.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    AppComponent,
    GestionClientesComponent,
    GestionVisitasComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
     
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
