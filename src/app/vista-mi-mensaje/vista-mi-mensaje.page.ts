import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Destino } from '../clases/destino';
import { Mensaje } from '../clases/mensaje';
import { ApiService } from '../servicios/api.service';
import { MensajeService } from '../servicios/mensaje.service';

@Component({
  selector: 'app-vista-mi-mensaje',
  templateUrl: './vista-mi-mensaje.page.html',
  styleUrls: ['./vista-mi-mensaje.page.scss'],
})
export class VistaMiMensajePage implements OnInit {
  mensaje!: Mensaje;
  destino!: Destino;
  btnGuardar:boolean;
  btnEditar:boolean;

  constructor(private servicioMensaje: MensajeService, private api: ApiService, public alertaControlador: AlertController, private ruteo: Router) {
    this.mensaje = this.servicioMensaje.Mensaje;
    this.destino = this.servicioMensaje.Destino;
    this.btnGuardar = true;
    this.btnEditar = false;
  }

  ngOnInit() {

  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }

  editar(): void {
    this.btnEditar = true;
  }

  validar():void{
    if (this.mensaje.contenido.length >= 4){
      this.btnGuardar = false;
    } else {
      this.btnGuardar = true;
    }
  }

  guardar():void{
    let datos = new FormData();
    datos.append("destino", this.mensaje.destino);
    datos.append("contenido", this.mensaje.contenido);
    this.api.editarMensaje(this.mensaje.idMensaje, datos).subscribe(respuesta => {
      this.editarMsj(respuesta);
    });
  }

  editarMsj(respuesta: Object):void{
    this.btnEditar = false;
  }

  cancelar():void{
    this.btnEditar = false;
  }

  async presentAlertConfirm() {
    const alert = await this.alertaControlador.create({
      cssClass: 'my-custom-class',
      header: 'Confirmar',
      message: '¿Está seguro de borrar su viaje a <strong>' + this.destino.nombre + '</strong>?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Si',
          handler: () => {
            this.borrar();
          }
        }
      ]
    });

    await alert.present();
  }

  borrar(): void {
    this.api.borrarMensaje(this.mensaje.idMensaje).subscribe(respuesta => {
      this.presentAlert(respuesta);
    });
  }

  async presentAlert(respuesta: Object) {
    const alert = await this.alertaControlador.create({
      cssClass: 'my-custom-class',
      header: 'Confirmación',
      message: respuesta['mensaje'],
      buttons: ['Aceptar']
    });

    await alert.present();
    this.ruteo.navigate(['/tabs/tab3']);

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}