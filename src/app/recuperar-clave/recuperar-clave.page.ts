import { Component, OnInit } from '@angular/core';
import { Usuario } from '../clases/usuario';
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-recuperar-clave',
  templateUrl: './recuperar-clave.page.html',
  styleUrls: ['./recuperar-clave.page.scss'],
})
export class RecuperarClavePage implements OnInit {
  usuario!: Usuario;
  respuestaDeRecuperacion!:string;
  btnEnviar!:boolean;

  constructor(private api: ApiService) {
    this.usuario = new Usuario();
    this.btnEnviar = true;
  }
  
  ngOnInit() {
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }

  validarCorreo():void{
    var patt = new RegExp(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/);
    var testCorreo = patt.test(this.usuario.correo);
    if (testCorreo) {
      this.btnEnviar = false;
    } else {
      this.btnEnviar = true;
    }
  }

  enviar():void{
    this.btnEnviar = true;
    let datos = new FormData();
    datos.append("correo", this.usuario.correo);
    this.api.recuperarClave(datos).subscribe(respuesta =>{
      this.mostrarRespuesta(respuesta);
    })
  }

  mostrarRespuesta(respuesta: Object){
    //this.respuestaDeRecuperacion = <string>JSON.stringify(respuesta);
  }
}
