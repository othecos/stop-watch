import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CryptosPageRoutingModule } from './cryptos-routing.module';

import { CryptosPage } from './cryptos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CryptosPageRoutingModule
  ],
  declarations: []
})
export class CryptosPageModule {}
