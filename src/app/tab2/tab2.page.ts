import { Component } from '@angular/core';
import { Destino } from '../clases/destino';
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  destinos!: Array<Destino>;
  busqueda!:string;
  ordenes!:Array<any>;
  orden:number = 0;
  
  constructor(private api: ApiService) {
    api.traerDestinos().subscribe( respuesta => {
      this.mostrarDestinos(respuesta);
    });

    this.ordenes = [
      {numero:1, tipoOrden:"Más visitado"},
      {numero:2, tipoOrden:"Menos visitado"},
    ];
  }

  mostrarDestinos(respuesta:Object){
    this.destinos = <Array<Destino>>respuesta;
    this.destinos.sort(function (x, y) { return x.nombre.localeCompare(y.nombre) });
  }

  ordenarPor(){
    this.orden = Number((<HTMLInputElement>document.getElementById('numeroOrden')).value);
  }
}
