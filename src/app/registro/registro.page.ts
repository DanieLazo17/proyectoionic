import { Component, OnInit } from '@angular/core';
import { Usuario } from '../clases/usuario';
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  usuario!: Usuario;
  usuarioRegistrado!:Usuario;
  txtRespuesta!: string;
  btnRegistrar!: boolean;
  txtClave!: boolean;

  constructor(private api: ApiService) {
    this.usuario = new Usuario();
    this.btnRegistrar = true;
    this.txtClave = false;
  }

  ngOnInit() {
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }

  validarFormulario(): void {
    var patt = new RegExp(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/);
    var testCorreo = patt.test(this.usuario.correo);
    var patt = new RegExp(/(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{4,}$/);
    var testPass = patt.test(this.usuario.contrasena);
    if (this.usuario.nombre.length >= 2 && testCorreo && testPass) {
      this.btnRegistrar = false;
    } else {
      this.btnRegistrar = true;
    }
  }

  validarNombre(): void {
    let datos = new FormData();
    datos.append("usuarioNuevo", this.usuario.nombre);
    this.api.buscarNombreDeUsuario(datos).subscribe(respuesta => {
      this.respuestaDeValidacion(respuesta);
    })
  }

  respuestaDeValidacion(respuesta: Object): void {
    if (respuesta['estado']) {
      this.txtClave = true;
    } else {
      this.txtClave = false;
    }
    this.txtRespuesta = respuesta['mensaje'];
  }

  registrar(): void {
    this.btnRegistrar = true;
    let datos = new FormData();
    datos.append("nuevoCorreo", this.usuario.correo);
    datos.append("nuevoUsuario", this.usuario.nombre);
    datos.append("nuevaContra", this.usuario.contrasena);
    this.api.registrarCuenta(datos).subscribe(respuesta => {
      this.respuestaDeRegistro(respuesta);
    })
  }

  respuestaDeRegistro(respuesta: Object):void{
    this.usuario = new Usuario();
    this.usuarioRegistrado = <Usuario>respuesta;
    this.txtRespuesta = "Usuario " + this.usuario.nombre + " generado correctamente";
  }
}
