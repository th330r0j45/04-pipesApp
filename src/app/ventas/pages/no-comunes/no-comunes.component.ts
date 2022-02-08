import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18n select
  nombre:string = 'Laura';
  genero:string = 'femenino';

  invitacionMap = {
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }
  // i18nPlural
  // clientes: string[] = [];
  clientes:string[] = ['Maria','Pedro','Juan','Mateo','Fernando','Eduardo','Hernando']
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.',
  }

  cambiarCliente(nombre:string){
     
    if (nombre == 'Mateo') {

      this.nombre = 'Laura';
      this.genero = 'femenino';
  
    }else{

      this.nombre = 'Mateo';
      this.genero = 'masculino';
    }
    
  }
  borrarCliente(){
    this.clientes.pop();
  }

  //Keyvalue pipe

  persona = {
    nombre : 'Mateo',
    edad: '23',
    direccion:'Manizales,COL'
  }
  
  //Json pipe
  heroes = [
    {
      nombre : 'Superman',
      vuela:true
    },
    {
      nombre : 'Robin',
      vuela:false
    },
    {
      nombre : 'Acuaman',
      vuela:false
    }
  ]

  //Async pipe

  miObservable = interval(1000); // 0,1,2,3,4....

  valorPromesa  = new Promise((resolve) => {

    setTimeout(() => {
      resolve ( 'Tenemos data de promesa!');
      },3500);

      
  });

  constructor() { }


  

}
