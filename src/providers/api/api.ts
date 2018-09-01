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
  //private baseUrl = 'http://localhost/rota/public/api/v1';

  // Admin Routes
  login(data){
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  schedule() {
    return this.http.get(`${this.baseUrl}/schedules`);
  }

  profile(){
    return this.http.get(`${this.baseUrl}/profile`);
  }

  employees() {
    return this.http.get(`${this.baseUrl}/employees`);
  }

  evalData(data){
    return this.http.get(`${this.baseUrl}/evaluations/`+data);
  }

  updateProfile(data) {
    return this.http.post(`${this.baseUrl}/profile/update`, data);
  }

  send(data) {
    return this.http.post(`${this.baseUrl}/send`, data);
  }

  // Employee Routes
  elogin(data){
    return this.http.post(`${this.baseUrl}/employee/login`, data);
  }

  eprofile(){
    return this.http.get(`${this.baseUrl}/employee/profile`);
  }

  eupdateProfile(data){
    return this.http.post(`${this.baseUrl}/employee/profile/update`, data);
  }

  eschedule(){
    return this.http.get(`${this.baseUrl}/employee/schedule`);
  }

  erequest(data) {
    return this.http.post(`${this.baseUrl}/employee/request/leave`, data);
  }

  efiles(){
    return this.http.get(`${this.baseUrl}/employee/evaluation/files`);
  }
  
}
