import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
  ],
  exports: [
    DashboardComponent
  ]
})
export class PagesModule { }
