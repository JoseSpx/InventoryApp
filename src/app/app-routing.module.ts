import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)},
  {
    path: 'tabs',
    loadChildren: () => import('./core/tabs/tabs.module').then( m => m.TabsPageModule),
    canActivate: [AuthGuard]
  }
  /*
  {
    path: 'tab-searcher',
    loadChildren: () => import('./core/tab-searcher/tab-searcher.module').then( m => m.TabSearcherPageModule)
  },
  {
    path: 'tab-data',
    loadChildren: () => import('./core/tab-data/tab-data.module').then( m => m.TabDataPageModule)
  },
  {
    path: 'tab-info-user',
    loadChildren: () => import('./core/tab-info-user/tab-info-user.module').then( m => m.TabInfoUserPageModule)
  },*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
