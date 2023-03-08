import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';


const routes: Routes = [
  {
    path: 'auth', //localhost:4200/
    loadChildren:() => import('./modules/auth/auth.module').then(m => m.AuthModule) // así se hace lazyloading para auth o  modulo de autenticación
  },
  {
    path: '', //localhost:4200/
    component: HomePageComponent,
    loadChildren:() => import('./modules/home/home.module').then(m => m.HomeModule) // así se hace lazyloading
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
