import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: ':username', //localhost:4200/
    loadChildren:() => import('./modules/home/home.module').then(m => m.HomeModule) // así se hace lazyloading
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
