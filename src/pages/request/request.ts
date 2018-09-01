import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, TextInput, AlertController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the RequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-request',
  templateUrl: 'request.html',
})
export class RequestPage {
  employee:any;
  request = {
    title: null,
    from: null,
    to: null
  };
  @ViewChild('message') message: TextInput;
  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    
  }

  getMyData(){
    this.api.eprofile().subscribe(data => this.handleResponse(data), error => this.handleError(error));
  }

  handleResponse(data){
    const alert = this.alertCtrl.create({
      title: 'Success',
      subTitle: 'Requests Sent!',
      buttons: ['OK']
    });
    alert.present();
    this.request.title = null;
    this.request.from = null;
    this.request.to = null;
    this.message.value = null;
  }

  handleError(error){
    console.log(error);
  }


  send(){
    let form = {
      title: this.request.title,
      from: this.request.from,
      to: this.request.to,
      message: this.message.value
    };
    this.api.erequest(form).subscribe(data => this.handleResponse(data), error => this.handleError(error));
  }

}
