import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { Router } from '@angular/router';  


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public photoService: PhotoService,public router:Router) { }
  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  go(path) {   
    // console.log(['viewer/\"'+String(path)+"\""])
    this.router.navigate(['viewer/'+String(path)]);  
  } 

}
