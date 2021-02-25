import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContenidoComponent } from '../components/contenido/contenido.component';

const routes: Routes = [
  { path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'contenido', component: ContenidoComponent},
      { path: '**', component: ContenidoComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule{}
