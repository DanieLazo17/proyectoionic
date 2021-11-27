import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordenarMensajes'
})
export class OrdenarMensajesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
