import { Component } from '@angular/core';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';

@Component({
  selector: 'app-root',
  standalone: true, // Si tu proyecto usa standalone
  imports: [InterpolacionComponent], // Asegúrate de incluir tu componente aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejercicio 13';
}
