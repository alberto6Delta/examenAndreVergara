import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent, MenuComponent, ContenidoComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ContenidoComponent,
    HeaderComponent,
    MenuComponent
  ]
})
export class ComponentsModule { }
