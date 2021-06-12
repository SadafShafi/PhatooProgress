import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewerPage } from './viewer.page';

const routes: Routes = [
  {
    path: '',
    component: ViewerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewerPageRoutingModule {}
