import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContenidoProtegidoPageRoutingModule } from './contenido-protegido-routing.module';

import { ContenidoProtegidoPage } from './contenido-protegido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContenidoProtegidoPageRoutingModule
  ],
  declarations: [ContenidoProtegidoPage]
})
export class ContenidoProtegidoPageModule {}
