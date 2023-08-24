import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ofertas',
    loadChildren: () => import('./promocoes/promocoes.module').then( m => m.PromocoesPageModule)
  },
  {
    path: 'head-set',
    loadChildren: () => import('./head-set/head-set.module').then( m => m.HeadSetPageModule)
  },
  {
    path: 'teclados',
    loadChildren: () => import('./teclados/teclados.module').then( m => m.TecladosPageModule)
  },
  {
    path: 'mouses',
    loadChildren: () => import('./mouses/mouses.module').then( m => m.MousesPageModule)
  },
  {
    path: 'mouse-pad',
    loadChildren: () => import('./mouse-pad/mouse-pad.module').then( m => m.MousePadPageModule)
  },  {
    path: 'carrinho',
    loadChildren: () => import('./carrinho/carrinho.module').then( m => m.CarrinhoPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
