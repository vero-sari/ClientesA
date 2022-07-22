import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionClientesComponent } from './gestion-clientes/gestion-clientes.component';
import { GestionVisitasComponent } from './gestion-visitas/gestion-visitas.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { ListaVisitasComponent } from './lista-visitas/lista-visitas.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
  {path: 'gestion-clientes', component: GestionClientesComponent},
  {path: 'gestion-visitas', component: GestionVisitasComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'lista-cliente', component: ListaClientesComponent},
  {path: 'lista-visita', component: ListaVisitasComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
