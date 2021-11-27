import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mensaje } from '../clases/mensaje';
import { MensajeService } from '../servicios/mensaje.service';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.scss'],
})
export class MensajeComponent implements OnInit {
  @Input() mensaje:Mensaje;

  constructor(private ruteo: Router, private servicioMensaje: MensajeService) { }

  ngOnInit() {}

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }

  verMensaje(){
    this.servicioMensaje.Mensaje = this.mensaje;
    this.ruteo.navigate(['/vista-mensaje']);
  }
}
