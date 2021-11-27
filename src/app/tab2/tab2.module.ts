import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { DestinoComponentModule } from '../destino/destino.module';

import { BuscarDestinosPipe } from '../transformaciones/buscar-destinos.pipe';
import { OrdenarDestinosPipe } from '../transformaciones/ordenar-destinos.pipe';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    DestinoComponentModule
  ],
  declarations: [Tab2Page, BuscarDestinosPipe, OrdenarDestinosPipe]
})
export class Tab2PageModule {}
