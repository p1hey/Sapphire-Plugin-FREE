import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HolaMundo';
  nombre = 'Juan'
  textPlaceholder = 'Escriba algo'
  desabilitado = true
  imgSrc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/640px-Angular_full_color_logo.svg.png'

  constructor() {
    setInterval(() => {
      this.desabilitado = false
      this.nombre = 'Javier'
    }, 3000)
  }
}
