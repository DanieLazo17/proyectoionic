import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerMensajesPage } from './ver-mensajes.page';

const routes: Routes = [
  {
    path: '',
    component: VerMensajesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerMensajesPageRoutingModule {}
