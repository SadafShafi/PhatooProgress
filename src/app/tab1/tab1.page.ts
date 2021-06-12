import { Component } from '@angular/core';
// import { OCR, OCRSourceType,OCRResult } from '@ionic-native/ocr/ngx';
import { PhotoService } from '../services/photo.service';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FileOpener } from '@ionic-native/file-opener/ngx';
// import {image.png} from '/'
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  // ocr:any = new OCR()
  // http:any = new HTTP;
  x: any;



  constructor(private http: HttpClient, public photoService: PhotoService) {

    console.log("here we begin")


  }
  async ngOnInit() {
    // await this.photoService.loadSaved();
    // this.x = this.photoService.photoss;
  }
  ionViewWillEnter() {
    this.fun("temp");
  }

  fun(image) {

    var payload = {
      // 'isOverlayRequired': false,
      'apikey': 'helloworld',
      'language': 'eng',
    }

    // var x = this.http.post('https://api.ocr.space/parse/image',{filename: image}
    var ddata;
    this.http.post('https://api.ocr.space/parse/image',{url:'/assets/image.jpg'},{headers:new HttpHeaders(payload)}).subscribe(data => {
      console.log("doing")
      console.log('my data: ', data);
      ddata = data;
    })

    return ddata;

  }





}
