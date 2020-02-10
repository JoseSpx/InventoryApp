import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabSearcherPageRoutingModule } from './tab-searcher-routing.module';

import { TabSearcherPage } from './tab-searcher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabSearcherPageRoutingModule
  ],
  declarations: [TabSearcherPage]
})
export class TabSearcherPageModule {}
