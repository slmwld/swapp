import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tabs/inicio', pathMatch: 'full' },
  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'cv', loadChildren: './pages/cv/cv.module#CvPageModule' },
  { path: 'book2', loadChildren: './pages/book2/book2.module#Book2PageModule' },
  { path: 'contact', loadChildren: './pages/contact/contact.module#ContactPageModule' },
  { path: 'diseno', loadChildren: './pages/diseno/diseno.module#DisenoPageModule' },
  { path: 'modelado', loadChildren: './pages/modelado/modelado.module#ModeladoPageModule' },
  { path: 'video', loadChildren: './pages/video/video.module#VideoPageModule' },  { path: 'modal', loadChildren: './pages/modal/modal.module#ModalPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
