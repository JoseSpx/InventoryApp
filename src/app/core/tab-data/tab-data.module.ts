import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabDataPageRoutingModule } from './tab-data-routing.module';

import { TabDataPage } from './tab-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabDataPageRoutingModule
  ],
  declarations: [TabDataPage]
})
export class TabDataPageModule {}
