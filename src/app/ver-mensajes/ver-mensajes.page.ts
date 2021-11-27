import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Destino } from '../clases/destino';
import { Mensaje } from '../clases/mensaje';
import { ApiService } from '../servicios/api.service';
import { MensajeService } from '../servicios/mensaje.service';

@Component({
  selector: 'app-ver-mensajes',
  templateUrl: './ver-mensajes.page.html',
  styleUrls: ['./ver-mensajes.page.scss'],
})
export class VerMensajesPage implements OnInit {
  mensajes!:Array<Mensaje>;
  destino!:Destino;
  busqueda!:string;
  
  constructor(private ruteo: Router, private api: ApiService, private servicioMensaje: MensajeService) {
    this.destino = this.servicioMensaje.Destino;
    this.api.traerMensajesDeDestinos(this.servicioMensaje.Destino.idDestino).subscribe( respuesta => {
      this.mostrarMensajes(respuesta);
    })
  }

  ngOnInit() {
  }

  mostrarMensajes(respuesta: Object){
    this.mensajes = <Array<Mensaje>>respuesta;
    this.mensajes.sort(function (x, y) { return y.fecha.localeCompare(x.fecha) });
  }
}
