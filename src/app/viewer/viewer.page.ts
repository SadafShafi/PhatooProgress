import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
// import { PhotoService } from '../services/photo.service';
import { Tab2Page } from '../tab2/tab2.page'


@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.page.html',
  styleUrls: ['./viewer.page.scss'],
})
export class ViewerPage {
  path: any
  x: any

  decodedResult: string;
  storedResult: string;

  constructor(private route: ActivatedRoute, 
    // public photoservice: PhotoService, 
    private router: Router,
    public taa :Tab2Page,
    private http: HttpClient) { }

  async ngOnInit() {

    // this.taa.printer()

    // First get the product id from the current route.
    this.path = this.route.snapshot.paramMap.get('path');
    // console.log("here are the parameters");
    // console.log(this.path)

    await this.taa.loadSaved();
    this.x = this.taa.photoss;
    // console.log(this.taa.photoss)


  }

  back() {

    this.router.navigate(['tabs/tab2']);

  }

  decodeImage() {
    var headers = {
      'apikey': 'helloworld'
    }
    const imageData = new FormData();
    
    const targetImage = this.taa.photoss[1];
    imageData.append('base64Image', targetImage.webviewPath);
    this.http.post('https://api.ocr.space/parse/image', imageData, 
    { headers: new HttpHeaders(headers) }
    ).subscribe((data: any) => {
      console.log("doing")
      console.log('my data: ', data);
      this.decodedResult = data.ParsedResults[0].ParsedText
      localStorage.setItem('first',this.decodedResult);
    }, err=> console.log(err))
  }

  showResults(){
    this.storedResult = localStorage.getItem('first'); 
  }
}
