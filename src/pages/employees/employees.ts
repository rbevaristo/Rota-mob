import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { EmployeePage } from '../employee/employee';
import { EvaluationPage } from '../evaluation/evaluation';
import { ShareProvider } from '../../providers/share/share';

/**
 * Generated class for the EmployeesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-employees',
  templateUrl: 'employees.html',
})
export class EmployeesPage {
  employees: Array<{}>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public share: ShareProvider) {
  }

  ionViewDidLoad() {
    this.getEmployees();
  }

  getEmployees(){
    this.http.get('http://localhost/rota/public/api/v1/employees').subscribe(data => this.handleResponse(data), error => this.handleError(error));
  }

  handleResponse(data){
    this.employees = data.data;
  }

  handleError(error){
    console.log(error);
  }

  view(data) {
    this.setEmp(data);
    this.navCtrl.push(EmployeePage, {
      data: data
    });
  }

  evaluation(data){
    this.setEmp(data);
    this.navCtrl.push(EvaluationPage, {
      data: data
    });
  }

  setEmp(employee){
    this.share.handle(JSON.stringify(employee));
  }
}
