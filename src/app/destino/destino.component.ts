import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Destino } from '../clases/destino';
import { MensajeService } from '../servicios/mensaje.service';

@Component({
  selector: 'app-destino',
  templateUrl: './destino.component.html',
  styleUrls: ['./destino.component.scss'],
})
export class DestinoComponent implements OnInit {
  @Input() destino:Destino;

  constructor(private ruteo: Router, private servicioMensaje:MensajeService) { }

  ngOnInit() {}

  traerMensajes(){
    this.servicioMensaje.Destino = this.destino;
    this.ruteo.navigate(['/ver-mensajes']);
  }
}
