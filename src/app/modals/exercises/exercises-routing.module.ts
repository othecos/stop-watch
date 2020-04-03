import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExercisesPage } from './exercises.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { MenuListComponent } from 'src/app/components/menu/list/list.component';

const routes: Routes = [
  {
    path: '',
    component: ExercisesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),ComponentsModule],
  entryComponents: [MenuListComponent],
  exports: [RouterModule],
})
export class ExercisesPageRoutingModule {}
