import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntervalPageRoutingModule } from './interval-routing.module';

import { IntervalPage } from './interval.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntervalPageRoutingModule
  ],
  declarations: [IntervalPage]
})
export class IntervalPageModule {}
