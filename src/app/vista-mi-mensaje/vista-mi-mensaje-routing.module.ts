import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaMiMensajePage } from './vista-mi-mensaje.page';

const routes: Routes = [
  {
    path: '',
    component: VistaMiMensajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistaMiMensajePageRoutingModule {}
