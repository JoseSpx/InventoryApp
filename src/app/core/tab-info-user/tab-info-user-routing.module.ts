import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabInfoUserPage } from './tab-info-user.page';

const routes: Routes = [
  {
    path: '',
    component: TabInfoUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabInfoUserPageRoutingModule {}
