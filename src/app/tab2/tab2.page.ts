import { Component } from '@angular/core';
import { Router } from '@angular/router';  
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public photoss: PPhoto[] = [];
  private PHOTO_STORAGE: string = "photoss";
  decodedResult: string;
  storedResult: string;
  showOnScreen:any;
  Spinner:boolean = false;
  no_of_notes:number;
  texts_array = [];
  loadingDone:boolean = false;

  constructor(public router:Router,private http: HttpClient) { }
  async ngOnInit() {
    await this.loadNumberOfNotes()
    // await console.log("number of notes from NgOnInit ",this.no_of_notes)
    // await this.loadTexts()
    // this.foo();
  }

  foo() {
    console.log("foooooooooooooooooooooooo")
    let selection =  document.getSelection();
    // let selRange = 
    // selection.selectionStart (0,3);
// do stuff with the range

    console.log(selection); 
}

  

  addPhotoToGallery() {
    this.addNewToGallery();
  }

  public async addNewToGallery() {

    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri, // file-based data; provides best performance
      source: CameraSource.Camera, // automatically take a new photo with the camera
      quality: 100 // highest quality (0 to 100)
    });
  
    // Save the picture and add it to photo collection
    const savedImageFile:any = await this.savePicture(capturedPhoto);

  }

    // Convert photo to base64 format, required by Filesystem API to save
    private async savePicture(cameraPhoto: Photo) {
      // Convert photo to base64 format, required by Filesystem API to save
      const base64Data = await this.readAsBase64(cameraPhoto);
      const fileName = new Date().getTime() + '.jpeg';
      this.decodeImage({
        filepath: fileName,
        webviewPath: base64Data
      })
    }

    decodeImage(imm) {
      this.Spinner = true;
      console.log("decoding")
      var headers = {
        'apikey': '50f01a276388957'          // keep this hidden
        // 50f01a276388957
      }
      const imageData = new FormData();
      
      const targetImage = imm;
      imageData.append('base64Image', targetImage.webviewPath);
      // setTimeout(
        this.http.post('https://api.ocr.space/parse/image', imageData, 
      { headers: new HttpHeaders(headers) }
      ).subscribe((data: any) => {
        console.log("doing")
        console.log('my data: ', data);
        this.Spinner = false
        if(data.IsErroredOnProcessing){
          this.showOnScreen = "ERROR"
        }
        else{
          this.decodedResult = data.ParsedResults[0].ParsedText
          this.showOnScreen = this.decodedResult;
        }
        
        localStorage.setItem('first',this.decodedResult);
      }, err=> {console.log(err);
        this.showOnScreen = "Unable to convert to text for some reason\n Make sure you've an internet connection";
        this.Spinner = false;
      } )
    }

  private async readAsBase64(cameraPhoto: Photo) {
    // Fetch the photo, read as a blob, then convert to base64 format
    const response = await fetch(cameraPhoto.webPath!);
    const blob = await response.blob();
  
    return await this.convertBlobToBase64(blob) as string;
  }
  
  convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader;
    reader.onerror = reject;
    reader.onload = () => {
        resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });

  public async loadSaved() {
    // Retrieve cached photo array data
    const photoList = await Storage.get({ key: this.PHOTO_STORAGE });
    this.photoss = JSON.parse(photoList.value) || [];
    
    // Display the photo by reading into base64 format
    for (let photo of this.photoss) {
    // Read each saved photo's data from the Filesystem
    const readFile = await Filesystem.readFile({
      path: photo.filepath,
        directory: Directory.Data
      });
      
      // Web platform only: Load the photo as base64 data
      photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
  }

  }

  go(path) {
    this.router.navigate(['viewer/'+String(path)]);  
  } 

  async saveText(){

    console.log("saved");

    this.no_of_notes += 1;
    
    await localStorage.setItem(String(this.no_of_notes),this.showOnScreen);
    console.log("number is >> ",this.no_of_notes)
    await localStorage.setItem('number',String(this.no_of_notes));
    this.showOnScreen = "";
    // await this.loadTexts()

  }

  async loadTexts(){

    
    var i = 0;
    for(i=0;i<=this.no_of_notes;i++){
      this.texts_array[i] = await localStorage.getItem(String(i));
      // console.log("loading",this.texts_array[i]);
    }
    this.loadingDone = true;
  }

  async loadNumberOfNotes(){
    
    this.no_of_notes = parseInt(await localStorage.getItem('number'));
    console.log("loading the number of notes",this.no_of_notes);
  }

}

export interface PPhoto {
  filepath: string;
  webviewPath: string;
}
