import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaMensajePage } from './vista-mensaje.page';

const routes: Routes = [
  {
    path: '',
    component: VistaMensajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistaMensajePageRoutingModule {}
