import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the EmployeeprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-employeeprofile',
  templateUrl: 'employeeprofile.html',
})
export class EmployeeprofilePage {
  public profile = {
    firstname: null,
    lastname: null,
    email: null,
    gender: null,
    birthday: null,
    mobile: null,
    number: null,
    street: null,
    city: null,
    state: null,
    zip: null,
    country: null
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  ionViewDidLoad() {
    this.getMyData();
  }

  getMyData(){
    this.http.get('http://localhost:8000/api/v1/employee/profile').subscribe(data => this.handleResponse(data), error => this.handleError(error));
  }

  handleResponse(data){
    this.profile.firstname = data.data.firstname;
    this.profile.lastname = data.data.lastname;
    this.profile.email = data.data.email;
    this.profile.gender = data.data.gender;
    this.profile.birthday = data.data.birthday;
    this.profile.mobile = data.data.mobile;
    this.profile.number = data.data.number;
    this.profile.street = data.data.street;
    this.profile.city = data.data.city;
    this.profile.state = data.data.state;
    this.profile.zip = data.data.zip;
    this.profile.country = data.data.country;
  }

  handleError(error){
    console.log(error);
  }

  editProfile(){
    this.http.post('http://localhost:8000/api/v1/employee/profile/update', this.profile).subscribe(data => this.handleResponse(data), error => this.handleError(error));

  }
}
