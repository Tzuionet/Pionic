import { Camera, CameraOptions } from '@ionic-native/camera';
import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  base64Image:string;

  firstName: string = "";
  lastName: string = "";

  constructor(private navCtrl: NavController, private alertCtrl: AlertController, private camera:Camera) {
  }

  hello(fn: string, ln: string) {
    const alert = this.alertCtrl.create({
      "title": "Hallo",
      //"subTitle": "Jop",
      "message": `Hallo ${fn} ${ln}`
    })
    alert.present();
  }

  navToLoginPage() {
    this.navCtrl.push("LoginPage");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  takePhoto() {
    const options: CameraOptions = {
      quality: 30,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }

}
