import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api:string;
  
  constructor(private clienteHttp: HttpClient) {
    this.api = 'https://servidordestino.herokuapp.com/';
  }

  registrarCuenta(datos: FormData){
    return this.clienteHttp.post(this.api + 'Usuario/Registro', datos);
  }

  buscarNombreDeUsuario(datos: FormData){
    return this.clienteHttp.post(this.api + 'Usuario/Nuevo', datos);
  }

  validarUsuario(datos: FormData){
    return this.clienteHttp.post(this.api + 'Usuario', datos);
  }

  traerDestinos(){
    return this.clienteHttp.get(this.api + 'Destino');
  }

  traerMensajesDeDestinos(idDestino: number){
    return this.clienteHttp.get(this.api + 'Mensaje/Destino/' + idDestino);
  }

  traerMensajesDeUsuario(idUsuario: number){
    return this.clienteHttp.get(this.api + 'Mensaje/Usuario/' + idUsuario);
  }

  traerDestino(idDestino: number){
    return this.clienteHttp.get(this.api + 'Destino/' + idDestino);
  }

  borrarMensaje(idMensaje: number){
    return this.clienteHttp.delete(this.api + 'Mensaje/Borrar/' + idMensaje);
  }

  editarMensaje(idMensaje: number, datos: FormData){
    return this.clienteHttp.post(this.api + 'Mensaje/' + idMensaje, datos);
  }

  buscarDestinoPorNombre(datos: FormData){
    return this.clienteHttp.post(this.api + 'Destino/Nombre', datos);
  }

  cargarNuevoDestino(datos: FormData){
    return this.clienteHttp.post(this.api + 'Destino/Nuevo', datos);
  }

  cargarNuevoMensaje(datos: FormData){
    return this.clienteHttp.post(this.api + 'Mensaje', datos);
  }

  traerDestinosOrdenados(){
    return this.clienteHttp.get(this.api + 'Destino/Orden');
  }

  recuperarClave(datos: FormData){
    return this.clienteHttp.post(this.api + 'Usuario/Recuperacion', datos);
  }
}
