import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountUpPage } from './count-up.page';

const routes: Routes = [
  {
    path: '',
    component: CountUpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountUpPageRoutingModule {}
