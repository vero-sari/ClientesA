import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionClientesComponent } from './gestion-clientes/gestion-clientes.component';
import { GestionVisitasComponent } from './gestion-visitas/gestion-visitas.component';


const routes: Routes = [
  {path: 'gestion-clientes', component: GestionClientesComponent},
  {path: 'gestion-visitas', component: GestionVisitasComponent},

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
