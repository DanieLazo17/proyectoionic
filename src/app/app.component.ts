import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { MensajeService } from './servicios/mensaje.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private servicioMensaje: MensajeService, private menu: MenuController) {
  }

  cerrarSesion(){
    sessionStorage.removeItem("usuario");
    this.servicioMensaje.MiUsuario = null;
  }

  cerrarMenu(){
    this.menu.close("first");
  }
}
