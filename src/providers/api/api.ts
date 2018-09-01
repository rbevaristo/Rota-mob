import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor(public http: HttpClient) {
  }

  private baseUrl = 'http://routa.me/api/v1';

  login(data){
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  register(){

  }

  schedule() {
    return this.http.get(`${this.baseUrl}/schedule`);
  }

  profile(){
    return this.http.get(`${this.baseUrl}/profile`);
  }

  updateProfile(data) {
    return this.http.post(`${this.baseUrl}/profile/update`, data);
  }

  elogin(data){
    return this.http.post(`${this.baseUrl}/employee/login`, data);
  }



  
}
