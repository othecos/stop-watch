import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { ListComponent } from './menu/list/list.component';
import { RouterModule } from '@angular/router';
import { ItemSkeletonComponent } from './menu/list/item-skeleton/item-skeleton.component';
import { ItemUpdateComponent } from './menu/list/item-update/item-update.component';
import { ItemComponent } from './menu/list/item/item.component';
import { VolumeComponent } from '../popovers/volume/volume.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [MenuComponent,ListComponent,ItemSkeletonComponent,ItemUpdateComponent,ItemComponent,VolumeComponent],
  exports: [MenuComponent,ListComponent,ItemSkeletonComponent,ItemUpdateComponent,ItemComponent,VolumeComponent,ReactiveFormsModule]
})
export class ComponentsModule {}
