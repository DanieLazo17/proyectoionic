import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Destino } from '../clases/destino';
import { Mensaje } from '../clases/mensaje';
import { Usuario } from '../clases/usuario';
import { ApiService } from '../servicios/api.service';
import { MensajeService } from '../servicios/mensaje.service';
import { Clipboard } from '@capacitor/clipboard';
import { AlertController } from '@ionic/angular';

import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  mensajes!:Array<Mensaje>;
  usuario!: Usuario;
  miViaje!:Destino;
  destino!:Destino;
  mensaje!:Mensaje;
  miMensaje!:string;
  miFecha!:string;
  fechaDeHoy!:string;
  respuestaDeRegistro!: string;
  btnIngresar!: boolean;
  btnAgregar!:boolean;
  btnGuardar!:boolean;
  dstVisitado!:boolean;
  btnGuardarMensaje!:boolean;
  imagenUrl!:string;

  constructor(private ruteo: Router, private api: ApiService, private servicioMensaje: MensajeService, public alertaControlador: AlertController) {
    if (this.servicioMensaje.MiUsuario != null){
      this.traerMensajesMiUsuario();
    }
    this.usuario = new Usuario();
    this.miViaje = new Destino();
    this.destino = new Destino();
    this.btnIngresar = true;
    this.btnAgregar = true;
    this.btnGuardar = true;
    this.dstVisitado = false;
    this.btnGuardarMensaje = true;
    let d = new Date();//Ver horario local
    this.fechaDeHoy = (d.toISOString()).substr(0,10);
  }

  ngOnInit() {
  }

  validarFormulario() {
    var patt = new RegExp(/(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{4,}$/);
    var testPass = patt.test(this.usuario.contrasena);
    if (this.usuario.nombre.length >= 2 && testPass) {
      this.btnIngresar = false;
    } else {
      this.btnIngresar = true;
    }
  }

  ingresar(): void {
    this.btnIngresar = true;
    let datos = new FormData();
    datos.append("nombre", this.usuario.nombre);
    datos.append("contrasena", this.usuario.contrasena);
    //La función subscribe() es asíncrono
    this.api.validarUsuario(datos).subscribe(
      respuesta => { this.verificarRespuesta(respuesta) },
      //error => {alert()},
      //() => {alert('Cargando..')}
    );
  }

  verificarRespuesta(respuesta: Object) {
    this.usuario = <Usuario>respuesta;
    if (this.usuario.nombre == null){
      this.respuestaDeRegistro = "Los datos ingresados no son correctos";
      return;
    }
    if (this.usuario.nombre != null) {
      this.respuestaDeRegistro = "Acceso correcto";
      sessionStorage.setItem("usuario", this.usuario.nombre);
      this.servicioMensaje.MiUsuario = this.usuario;
      this.traerMensajesMiUsuario();
    }
  }

  traerMensajesMiUsuario(){
    this.respuestaDeRegistro = "";
    this.api.traerMensajesDeUsuario(this.servicioMensaje.MiUsuario.idUsuario).subscribe( respuesta =>{
      this.mostrarMensajes(respuesta);
    })
  }

  mostrarMensajes(respuesta: Object){
    this.mensajes = <Array<Mensaje>>respuesta;
    this.mensajes.sort(function (x, y) { return y.fecha.localeCompare(x.fecha) });
  }

  agregarViaje():void{
    this.btnAgregar = false;
  }

  cancelar():void{
    this.btnAgregar = true;
    this.dstVisitado = false;
    this.miViaje = new Destino();
    this.destino = new Destino();
    this.miMensaje = '';
    this.miFecha = '';
    this.imagenUrl = '';
  }

  buscarDestino():void{
    let datos = new FormData();
    datos.append("nombre", this.miViaje.nombre);
    this.api.buscarDestinoPorNombre(datos).subscribe( respuesta =>{
      this.buscarMiViaje(respuesta);
    })
  }

  buscarMiViaje(respuesta: Object){
    this.destino = <Destino>respuesta;
    if (this.destino.nombre != null) {
      this.dstVisitado = true;
    }
  }

  validarViaje():void{
    if (this.miViaje.nombre.length >= 4 && this.miViaje.tipoTurismo.length >= 4 && this.miViaje.pais.length >=4 && this.miViaje.provincia.length >= 4 && this.miMensaje.length >=4){
      this.btnGuardar = false;
    } else {
      this.btnGuardar = true;
    }
  }

  validarMensaje():void{
    if (this.miMensaje.length >= 4){
      this.btnGuardarMensaje = false;
    } else {
      this.btnGuardarMensaje = true;
    }
  }

  guardarMiViaje():void{
    this.btnGuardar = true;
    let datos = new FormData();
    datos.append("nombre", this.miViaje.nombre);
    datos.append("tipoTurismo", this.miViaje.tipoTurismo);
    datos.append("pais", this.miViaje.pais);
    datos.append("provincia", this.miViaje.provincia);
    this.api.cargarNuevoDestino(datos).subscribe( respuesta =>{
      this.respuestaGuardarMiViaje(respuesta);
    })
  }

  respuestaGuardarMiViaje(respuesta: Object):void{
    this.destino = <Destino>respuesta;
    let datos = new FormData();
    datos.append("destino", String(this.destino.idDestino));
    datos.append("usuario", String(this.servicioMensaje.MiUsuario.idUsuario));
    datos.append("contenido", this.miMensaje);
    datos.append("fecha", this.miFecha.substr(0,10));
    this.api.cargarNuevoMensaje(datos).subscribe( respuesta =>{
      this.respuestaGuardarMensaje(respuesta);
    })
  }

  respuestaGuardarMensaje(respuesta: Object):void{
    this.mensaje = <Mensaje>respuesta;
    this.mensajes.push(this.mensaje);
    this.cancelar();
  }

  guardarMensaje():void{
    this.btnGuardarMensaje = true;
    let datos = new FormData();
    datos.append("destino", String(this.destino.idDestino));
    datos.append("usuario", String(this.servicioMensaje.MiUsuario.idUsuario));
    datos.append("contenido", this.miMensaje);
    datos.append("fecha", this.miFecha.substr(0,10));
    this.api.cargarNuevoMensaje(datos).subscribe( respuesta =>{
      this.respuestaGuardarMensaje(respuesta);
    })
  }

  mostrarFecha():void{
    let miFecha = this.miFecha.substr(0,10);
    console.log(miFecha);
  }

  checkClipboard = async () => {
    const { type, value } = await Clipboard.read();
  
    this.presentAlert(value);
  };

  async presentAlert(value: string) {
    const alert = await this.alertaControlador.create({
      cssClass: 'my-custom-class',
      header: 'Mensaje',
      message: value,
      buttons: ['Aceptar']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
  
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    this.imagenUrl = image.webPath;
  };
}