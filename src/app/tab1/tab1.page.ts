import { Component } from '@angular/core';
import { Tab2Page } from '../tab2/tab2.page'
import { Router } from '@angular/router';  

@Component({ 
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  constructor(public Page2:Tab2Page,public router:Router){}

  async ionViewWillEnter(){
    await this.Page2.loadNumberOfNotes()
    await this.Page2.loadTexts()

  }

  async destroy(){
    await localStorage.clear()
    this.Page2.no_of_notes = 0;
    console.log("cleared")
    location.reload();
  }

  go(highlight) {   
    console.log("going next")
    this.router.navigate(['viewhigh/'+String(highlight)]);  
  } 

  




}
