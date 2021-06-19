import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewhighPage } from './viewhigh.page';

const routes: Routes = [
  {
    path: '',
    component: ViewhighPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewhighPageRoutingModule {}
