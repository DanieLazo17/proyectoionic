import { Pipe, PipeTransform } from '@angular/core';
import { Mensaje } from '../clases/mensaje';

@Pipe({
  name: 'buscarMensajes'
})
export class BuscarMensajesPipe implements PipeTransform {

  transform(value: Array<Mensaje>, busqueda: string): Array<Mensaje> {
    if(busqueda == null || busqueda.valueOf() == '' ){
      return value;
    }
    return value.filter(d=> d.contenido.toLowerCase().indexOf(busqueda.toLowerCase()) > -1);
  }
}
