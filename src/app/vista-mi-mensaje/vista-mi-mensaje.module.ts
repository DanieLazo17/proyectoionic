import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistaMiMensajePageRoutingModule } from './vista-mi-mensaje-routing.module';

import { VistaMiMensajePage } from './vista-mi-mensaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistaMiMensajePageRoutingModule
  ],
  declarations: [VistaMiMensajePage]
})
export class VistaMiMensajePageModule {}
