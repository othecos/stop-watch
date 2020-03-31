import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'interval',
    pathMatch: 'full'
  },
  {
    path: 'interval',
    loadChildren: () => import('./pages/interval/interval.module').then( m => m.IntervalPageModule)
  },
  {
    path: 'donate',
    loadChildren: () => import('./pages/donate/donate.module').then( m => m.DonatePageModule)
  },
  {
    path: 'count-down',
    loadChildren: () => import('./pages/count-down/count-down.module').then( m => m.CountDownPageModule)
  },
  {
    path: 'count-up',
    loadChildren: () => import('./pages/count-up/count-up.module').then( m => m.CountUpPageModule)
  },
  {
    path: '**',
    redirectTo: 'interval',
  },
  {
    path: 'timer',
    loadChildren: () => import('./modals/timer/timer.module').then( m => m.TimerPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
