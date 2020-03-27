import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountDownPage } from './count-down.page';

const routes: Routes = [
  {
    path: '',
    component: CountDownPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountDownPageRoutingModule {}
