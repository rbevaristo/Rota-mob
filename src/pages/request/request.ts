import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, TextInput, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

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
  employee:any
  @ViewChild('title') title: any;
  @ViewChild('from') from: any;
  @ViewChild('to') to: any;
  @ViewChild('message') message: TextInput;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    
  }

  getMyData(){
    this.http.get('http://localhost:8000/api/v1/employee/profile').subscribe(data => this.handleResponse(data), error => this.handleError(error));
  }

  handleResponse(data){
    const alert = this.alertCtrl.create({
      title: 'Success',
      subTitle: 'Requests Sent!',
      buttons: ['OK']
    });
    alert.present();
  }

  handleError(error){
    console.log(error);
  }


  send(){
    let form = {
      title: this.title.value,
      from: this.from.value,
      to: this.to.value,
      message: this.message.value
    };
    this.http.post('http://localhost:8000/api/v1/employee/request/leave', form).subscribe(data => this.handleResponse(data), error => this.handleError(error));
  }

}
