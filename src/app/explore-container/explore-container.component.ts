import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Destino } from '../clases/destino';
import { MensajeService } from '../servicios/mensaje.service';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() destino: Destino;

  constructor(private ruteo: Router, private servicioMensaje:MensajeService) { }

  ngOnInit() {}

  traerMensajes(){
    this.servicioMensaje.Destino = this.destino;
    this.ruteo.navigate(['/ver-mensajes']);
  }
}
