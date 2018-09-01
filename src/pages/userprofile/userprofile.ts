import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, TextInput } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the UserprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userprofile',
  templateUrl: 'userprofile.html',
})
export class UserprofilePage {
  public profile = {
    firstname: null,
    lastname: null,
    email: null,
    number: null,
    street: null,
    city: null,
    state: null,
    zip: null,
    country: null
  };
  @ViewChild('gender')gender: TextInput;
  @ViewChild('birthdate')birthdate: TextInput;
  @ViewChild('mobile')mobile: TextInput;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public api: ApiProvider) {
  }

  ionViewDidLoad() {
    this.getMyData();
  }

  getMyData(){
    this.api.profile().subscribe(data => this.handleResponse(data), error => this.handleError(error))
    //this.http.get('http://localhost/rota/public/api/v1/profile').subscribe(data => this.handleResponse(data), error => this.handleError(error));
  }

  handleResponse(data){
    console.log(this.gender, this.birthdate, this.mobile);
    this.profile.firstname = data.data.firstname;
    this.profile.lastname = data.data.lastname;
    this.profile.email = data.data.email;
    this.gender = data.data.gender;
    this.birthdate = data.data.birthdate;
    this.mobile = data.data.contact;
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
    this.api.updateProfile(this.profile).subscribe(data => this.handleResponse(data), error => this.handleError(error));
    //this.http.post('http://localhost/rota/public/api/v1/profile/update', this.profile).subscribe(data => this.handleResponse(data), error => this.handleError(error));

  }

}
