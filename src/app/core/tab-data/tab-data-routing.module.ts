import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabDataPage } from './tab-data.page';

const routes: Routes = [
  {
    path: '',
    component: TabDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabDataPageRoutingModule {}
