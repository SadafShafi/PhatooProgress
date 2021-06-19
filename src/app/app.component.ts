import { Component } from '@angular/core';
import { Tab2Page } from './tab2/tab2.page'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public pager2:Tab2Page){
    // console.log("consoler")
  }
  async ngOninit(){

    // this.pager2.no_of_notes = 0;
    // await localStorage.setItem('number',String(0));
    // await localStorage.setItem('0',"MyNotes");
    // await localStorage.setItem('0h',"heading here");
    // console.log("insider app module set")

  }
}
