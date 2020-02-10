import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabInfoUserPageRoutingModule } from './tab-info-user-routing.module';

import { TabInfoUserPage } from './tab-info-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabInfoUserPageRoutingModule
  ],
  declarations: [TabInfoUserPage]
})
export class TabInfoUserPageModule {}
