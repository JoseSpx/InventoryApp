import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabSearcherPage } from './tab-searcher.page';

const routes: Routes = [
  {
    path: '',
    component: TabSearcherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabSearcherPageRoutingModule {}
