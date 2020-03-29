import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { ListComponent } from './menu/list/list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
  ],
  declarations: [MenuComponent,ListComponent],
  exports: [MenuComponent,ListComponent]
})
export class ComponentsModule {}
