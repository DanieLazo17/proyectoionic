import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Destino } from '../clases/destino';
import { Mensaje } from '../clases/mensaje';
import { ApiService } from '../servicios/api.service';
import { MensajeService } from '../servicios/mensaje.service';

@Component({
  selector: 'app-mi-mensaje',
  templateUrl: './mi-mensaje.component.html',
  styleUrls: ['./mi-mensaje.component.scss'],
})
export class MiMensajeComponent implements OnInit {
  @Input() mensaje: Mensaje;
  destino!:Destino;

  constructor(private ruteo: Router, private api: ApiService, private servicioMensaje: MensajeService) {
    
  }

  ngOnInit() {
    this.api.traerDestino(Number(this.mensaje.destino)).subscribe( respuesta =>{
      this.guardarDestino(respuesta);
    })
  }

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }

  guardarDestino(respuesta: Object){
    this.destino = <Destino>respuesta;
  }

  verMensaje(){
    this.servicioMensaje.Mensaje = this.mensaje;
    this.servicioMensaje.Destino = this.destino;
    this.ruteo.navigate(['/vista-mi-mensaje']);
  }
}
