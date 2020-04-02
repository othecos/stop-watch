import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntervalPageRoutingModule } from './interval-routing.module';

import { IntervalPage } from './interval.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    IntervalPageRoutingModule
  ],
  entryComponents: [],
  declarations: [IntervalPage]
})
export class IntervalPageModule {}
