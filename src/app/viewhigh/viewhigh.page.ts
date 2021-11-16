import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Tab2Page } from '../tab2/tab2.page'

@Component({
  selector: 'app-viewhigh',
  templateUrl: './viewhigh.page.html',
  styleUrls: ['./viewhigh.page.scss'],
})
export class ViewhighPage implements OnInit {
  highlight:any;

  constructor(public Page2:Tab2Page,
    private route: ActivatedRoute, 
    private router: Router,) { }

    async ionViewWillEnter(){
      await this.Page2.loadNumberOfNotes()
      await this.Page2.loadTexts()
  
    } 

  async ngOnInit() {
    this.highlight = this.route.snapshot.paramMap.get('high');
    console.log(this.highlight)
  } 

  go(){
    this.router.navigate(['']);
  }
}
