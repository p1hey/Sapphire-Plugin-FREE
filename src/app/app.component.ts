import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  texto = ''
  listEstudiantes: any[] = [
    {nombre: 'Tomas Gonzales', estado: 'Promocionado'},
    {nombre: 'Lucas perez', estado: 'Regular'},
    {nombre: 'Juan garcia', estado: 'Regular'},
    {nombre: 'Martha Perez', estado: 'Promocionado'},
    {nombre: 'Nicolas Gomez', estado: 'Libre'},
  ]
  mostrar = true

  toogle(): void {
    this.mostrar = !this.mostrar
  }
}
