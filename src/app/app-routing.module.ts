import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'router/home',
    pathMatch: 'full'
  },
  {
    path: 'router/interval',
    loadChildren: () => import('./pages/interval/interval.module').then( m => m.IntervalPageModule)
  },
  {
    path: 'router/donate',
    loadChildren: () => import('./pages/donate/donate.module').then( m => m.DonatePageModule)
  },
  {
    path: 'router/donate/:id',
    loadChildren: () => import('./modals/cryptos/cryptos.module').then( m => m.CryptosPageModule)
  },
  {
    path: 'router/count-down',
    loadChildren: () => import('./pages/count-down/count-down.module').then( m => m.CountDownPageModule)
  },
  {
    path: 'router/count-up',
    loadChildren: () => import('./pages/count-up/count-up.module').then( m => m.CountUpPageModule)
  },
  {
    path: 'router/home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '**',
    redirectTo: '/router/home',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
