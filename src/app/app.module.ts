import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionClientesComponent } from './gestion-clientes/gestion-clientes.component';
import { GestionVisitasComponent } from './gestion-visitas/gestion-visitas.component';
import { MenuComponent } from './menu/menu.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { ListaVisitasComponent } from './lista-visitas/lista-visitas.component';



@NgModule({
  declarations: [
    AppComponent,
    GestionClientesComponent,
    GestionVisitasComponent,
    MenuComponent,
    ListaClientesComponent,
    ListaVisitasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
     
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
