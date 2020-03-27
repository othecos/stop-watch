import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CountUpPageRoutingModule } from './count-up-routing.module';

import { CountUpPage } from './count-up.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CountUpPageRoutingModule
  ],
  declarations: [CountUpPage]
})
export class CountUpPageModule {}
