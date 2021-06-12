import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../services/photo.service';



@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.page.html',
  styleUrls: ['./viewer.page.scss'],
})
export class ViewerPage {
  path: any
  x: any

  constructor(private route: ActivatedRoute, public photoservice: PhotoService, private router: Router,
    private http: HttpClient) { }

  async ngOnInit() {

    // First get the product id from the current route.
    this.path = this.route.snapshot.paramMap.get('path');
    // console.log("here are the parameters");
    // console.log(this.path)

    await this.photoservice.loadSaved();
    this.x = this.photoservice.photoss;
    console.log(this.photoservice.photoss)
  }

  back() {

    this.router.navigate(['tabs/tab2']);

  }

  decodeImage() {
    var headers = {
      'apikey': 'helloworld'
    }
    const imageData = new FormData();
    
    const targetImage = this.photoservice.photoss[1];
    imageData.append('base64Image', targetImage.webviewPath);
    this.http.post('https://api.ocr.space/parse/image', imageData, 
    { headers: new HttpHeaders(headers) }
    ).subscribe(data => {
      console.log("doing")
      console.log('my data: ', data);
    }, err=> console.log(err))
  }
}
