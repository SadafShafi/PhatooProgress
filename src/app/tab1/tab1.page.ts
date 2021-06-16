import { Component } from '@angular/core';
import { Tab2Page } from '../tab2/tab2.page'
@Component({ 
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  constructor(public Page2:Tab2Page){}

  async ionViewWillEnter(){
    await this.Page2.loadNumberOfNotes()
    await this.Page2.loadTexts()
  }

  




}
