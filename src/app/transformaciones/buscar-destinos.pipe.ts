import { Pipe, PipeTransform } from '@angular/core';
import { Destino } from '../clases/destino';

@Pipe({
  name: 'buscarDestinos'
})
export class BuscarDestinosPipe implements PipeTransform {

  transform(value: Array<Destino>, busqueda: string): Array<Destino> {
    if(busqueda == null || busqueda.valueOf() == '' ){
      return value;
    }
    return value.filter(d=> d.nombre.toLowerCase().indexOf(busqueda.toLowerCase()) > -1);
  }

}
