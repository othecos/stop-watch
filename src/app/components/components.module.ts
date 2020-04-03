import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { VolumeComponent } from './popovers/volume/volume.component';
import { MenuComponentsModule } from './menu/menu.components.module';
import { MenuListComponent } from './menu/list/list.component';
import { ExercisesComponentsModule } from './exercises/exercises.components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    ReactiveFormsModule,
    MenuComponentsModule,
    ExercisesComponentsModule,
  ],
  declarations: [
    VolumeComponent
  ],
  entryComponents: [
    MenuListComponent,
  ],
  exports: [
    MenuComponentsModule,
    ExercisesComponentsModule,
    VolumeComponent,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
