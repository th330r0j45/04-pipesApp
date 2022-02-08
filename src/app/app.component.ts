import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  nombre:string = 'Mateo Rojas';
  valor:number = 1000;

  obj = {
    nomber: 'Mateo'
  }

  mostrarNombre(){
    console.log(this.nombre);
    console.log(this.valor);
  }

  constructor(private PrimeNGConfig:PrimeNGConfig){

  }

  ngOnInit(){
    this.PrimeNGConfig.ripple = true;
  }
}
