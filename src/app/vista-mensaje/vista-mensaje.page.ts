import { Component, OnInit } from '@angular/core';
import { Mensaje } from '../clases/mensaje';
import { MensajeService } from '../servicios/mensaje.service';

@Component({
  selector: 'app-vista-mensaje',
  templateUrl: './vista-mensaje.page.html',
  styleUrls: ['./vista-mensaje.page.scss'],
})
export class VistaMensajePage implements OnInit {
  mensaje!:Mensaje;

  constructor(public servicioMensaje: MensajeService) {
    this.mensaje = this.servicioMensaje.Mensaje;
  }

  ngOnInit() {

  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }
}
