import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  
import { ActivatedRoute } from '@angular/router';  
import { PhotoService } from '../services/photo.service';



@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.page.html',
  styleUrls: ['./viewer.page.scss'],
})
export class ViewerPage{
  path:any
  x:any

  constructor(private route:ActivatedRoute,public photoservice:PhotoService,private router:Router) { }
  
  async ngOnInit() {

    // First get the product id from the current route.
    this.path = this.route.snapshot.paramMap.get('path');  
    // console.log("here are the parameters");
    // console.log(this.path)

    await this.photoservice.loadSaved();
    this.x = this.photoservice.photoss;
    // console.log(this.photoservice.photoss)
  }

  back(){

    this.router.navigate(['tabs/tab2']); 

  }


}
