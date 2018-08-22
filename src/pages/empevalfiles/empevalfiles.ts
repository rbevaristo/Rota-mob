import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the EmpevalfilesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-empevalfiles',
  templateUrl: 'empevalfiles.html',
})
export class EmpevalfilesPage {
  files: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  ionViewDidLoad() {
    this.getMyData();
  }

  getMyData(){
    this.http.get('http://localhost:8000/api/v1/employee/evaluation/files').subscribe(data => this.handleResponse(data), error => this.handleError(error));
  }

  handleResponse(data){
    this.files = data.data;
  }

  handleError(error){
    console.log(error);
  }

  selectedFile(url){
    window.open(url);
  }
}
