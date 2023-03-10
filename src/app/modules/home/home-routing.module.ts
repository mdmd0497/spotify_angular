import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { SideBarComponent } from '@shared/components/side-bar/side-bar.component'; //una belleza gracias a usar paths en tsconfig.json

const routes: Routes = [
  // para realizar el router outlet y no borrar modulos o sobreescribir unos sobre otros aplicamos lazy loading en el modulo de home page
  {
    path:'tracks',
    loadChildren:() => import('@modules/tracks/tracks.module').then(m => m.TracksModule)
  },
  {
    path:'favorites',
    loadChildren:() => import('@modules/favorites/favorites.module').then(m => m.FavoritesModule)
  },
  {
    path:'history',
    loadChildren:() => import('@modules/history/history.module').then(m => m.HistoryModule) 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
