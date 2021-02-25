import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  nav: any;
  menu: string[] | undefined;

  constructor(public servicio: ServicesService) { }

  ngOnInit(): void {
    this.nav = document.getElementById('menu');
    this.servicio.menu().subscribe(
      response => {
        this.menu = response.opciones;
      }
    )
  }

  cerrar() {
    this.nav.classList.toggle('abrir');
  }

}
