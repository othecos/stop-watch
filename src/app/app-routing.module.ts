import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/interval',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
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
    path: 'interval',
    loadChildren: () => import('./pages/interval/interval.module').then( m => m.IntervalPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
