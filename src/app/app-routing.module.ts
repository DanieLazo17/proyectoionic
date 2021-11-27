import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PermisoGuard } from './validaciones/permiso.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'ver-mensajes',
    loadChildren: () => import('./ver-mensajes/ver-mensajes.module').then( m => m.VerMensajesPageModule)
  },
  {
    path: 'vista-mensaje',
    loadChildren: () => import('./vista-mensaje/vista-mensaje.module').then( m => m.VistaMensajePageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'contenido-protegido',
    loadChildren: () => import('./contenido-protegido/contenido-protegido.module').then( m => m.ContenidoProtegidoPageModule),
    canActivate:[PermisoGuard]
  },
  {
    path: 'vista-mi-mensaje',
    loadChildren: () => import('./vista-mi-mensaje/vista-mi-mensaje.module').then( m => m.VistaMiMensajePageModule)
  },
  {
    path: 'recuperar-clave',
    loadChildren: () => import('./recuperar-clave/recuperar-clave.module').then( m => m.RecuperarClavePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
