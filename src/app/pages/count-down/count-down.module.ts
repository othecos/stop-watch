import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CountDownPageRoutingModule } from './count-down-routing.module';

import { CountDownPage } from './count-down.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CountDownPageRoutingModule
  ],
  declarations: [CountDownPage]
})
export class CountDownPageModule {}
