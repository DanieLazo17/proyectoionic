import { Component } from '@angular/core';
import { Destino } from '../clases/destino';
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  destinos!:Array<Destino>;

  constructor(private api: ApiService) {
    this.api.TraerDestinosPopulares().subscribe(respuesta =>{
      this.mostrarDestinos(respuesta);
    })
  }

  mostrarDestinos(respuesta: Object):void{
    this.destinos = <Array<Destino>>respuesta;
  }
}
