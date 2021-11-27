import { Injectable } from '@angular/core';
import { Destino } from '../clases/destino';
import { Mensaje } from '../clases/mensaje';
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  
  private miUsuario !: Usuario;
  
  public get MiUsuario() : Usuario {
    return this.miUsuario;
  }
  public set MiUsuario(v : Usuario) {
    this.miUsuario = v;
  }

  private destino !:Destino;

  public get Destino() : Destino {
    return this.destino;
  }
  public set Destino(v : Destino) {
    this.destino = v;
  }

  private mensaje !: Mensaje;
  
  public get Mensaje() : Mensaje {
    return this.mensaje;
  }
  public set Mensaje(v : Mensaje) {
    this.mensaje = v;
  }

  constructor() { }
}
