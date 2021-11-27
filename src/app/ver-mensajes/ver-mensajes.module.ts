import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerMensajesPageRoutingModule } from './ver-mensajes-routing.module';

import { VerMensajesPage } from './ver-mensajes.page';
import { MensajeComponentModule } from '../mensaje/mensaje.module';

import { BuscarMensajesPipe } from '../transformaciones/buscar-mensajes.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerMensajesPageRoutingModule,
    MensajeComponentModule
  ],
  declarations: [VerMensajesPage, BuscarMensajesPipe]
})
export class VerMensajesPageModule {}
