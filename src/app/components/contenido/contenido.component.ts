import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.scss']
})
export class ContenidoComponent implements OnInit{
  valor: boolean;

  constructor(private router: Router) {
    console.log(this.valor = true)
   }

  ngOnInit(): void {
  }

}
