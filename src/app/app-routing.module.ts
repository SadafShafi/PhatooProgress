import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'viewer/:path',
    loadChildren: () => import('./viewer/viewer.module').then( m => m.ViewerPageModule)
  },
  // {
  //   path: 'viewhigh',
  //   loadChildren: () => import('./viewhigh/viewhigh.module').then( m => m.ViewhighPageModule)
  // },
  {
    path: 'viewhigh/:high',
    loadChildren: () => import('./viewhigh/viewhigh.module').then( m => m.ViewhighPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
