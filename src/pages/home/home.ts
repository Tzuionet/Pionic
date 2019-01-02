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

  firstName: string = "";
  lastName: string = "";

  constructor(private navCtrl: NavController, private alertCtrl: AlertController) {
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

}
