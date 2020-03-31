import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'router/interval',
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
    path: 'router/count-down',
    loadChildren: () => import('./pages/count-down/count-down.module').then( m => m.CountDownPageModule)
  },
  {
    path: 'router/count-up',
    loadChildren: () => import('./pages/count-up/count-up.module').then( m => m.CountUpPageModule)
  },
  {
    path: '**',
    redirectTo: '/router/interval',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
