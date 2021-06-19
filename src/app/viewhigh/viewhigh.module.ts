import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewhighPageRoutingModule } from './viewhigh-routing.module';

import { ViewhighPage } from './viewhigh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewhighPageRoutingModule
  ],
  declarations: [ViewhighPage]
})
export class ViewhighPageModule {}
