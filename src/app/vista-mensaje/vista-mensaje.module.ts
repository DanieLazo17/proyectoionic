import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistaMensajePageRoutingModule } from './vista-mensaje-routing.module';

import { VistaMensajePage } from './vista-mensaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistaMensajePageRoutingModule
  ],
  declarations: [VistaMensajePage]
})
export class VistaMensajePageModule {}
