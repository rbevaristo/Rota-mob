import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  items: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider) {
  }

  ionViewDidLoad() {
    this.api.schedule().subscribe(
      data => this.handleResponse(data), error => this.handleError(error)
    );
  }

  handleResponse(data){
    this.items = data.data;
  }

  handleError(error){
    console.log(error);
  }

  selectedFile(url){
    // window.open(url, '_system');
  window.open(encodeURI('https://docs.google.com/gview?embedded=true&url=' + url), '_blank', 'location=yes,EnableViewPortScale=yes');
  }
}
