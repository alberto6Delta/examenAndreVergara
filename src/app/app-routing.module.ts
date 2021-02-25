import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth/auth.routing';
import { PagesRoutingModule } from './pages/pages.routing';

const routes: Routes = [

  // path: '/dashboard' PagesRouting
  // path: '/auth' AuthRouting

  { path: '', redirectTo: '/login', pathMatch: 'full' },

];

@NgModule({
declarations: [],
imports: [
  RouterModule.forRoot( routes ),
  PagesRoutingModule,
  AuthRoutingModule
],
exports: [ RouterModule ]
})
export class AppRoutingModule { }
