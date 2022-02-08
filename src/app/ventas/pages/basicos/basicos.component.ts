import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  
  nombreLower:string = 'mateo';
  nombreUpper:string = 'MATEO';
  nombreCompleto:string = 'mateo rOjas giraldo';

  fecha:Date = new Date();


}
