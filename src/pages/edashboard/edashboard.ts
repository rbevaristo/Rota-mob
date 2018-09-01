import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the EdashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edashboard',
  templateUrl: 'edashboard.html',
})
export class EdashboardPage {
  schedules: Array<{date: any, shift: any}>;
  s = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider) {
  }

  ionViewDidLoad() {
    this.api.eschedule().subscribe(
      data => this.handleResponse(data), error => this.handleError(error)
    );
  }
  handleResponse(data){
    for(var i = 0; i < data.data.length; i++){
      var x = data.data[i].split(',');


      this.schedules = [{
        date: x[0], shift: x[1]
      }];
      this.s.push(this.schedules);
    }
  }

  handleError(error){
    console.log(error);
  }


}
