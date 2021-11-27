import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContenidoProtegidoPage } from './contenido-protegido.page';

const routes: Routes = [
  {
    path: '',
    component: ContenidoProtegidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContenidoProtegidoPageRoutingModule {}
