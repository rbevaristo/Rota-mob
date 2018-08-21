import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EmployeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-employee',
  templateUrl: 'employee.html',
})
export class EmployeePage {
  employee:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.employee = navParams.get('data');
    
  }

  ionViewDidLoad() {

  }

}
