import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewerPageRoutingModule } from './viewer-routing.module';

import { ViewerPage } from './viewer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewerPageRoutingModule
  ],
  declarations: [ViewerPage]
})
export class ViewerPageModule {}
