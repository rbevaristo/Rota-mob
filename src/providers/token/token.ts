import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TokenProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TokenProvider {

  constructor(public http: HttpClient) {

  }

  handle(token, user){
    this.set(token, user);
  }

  set(token, user){
    localStorage.setItem('token', token);
    localStorage.setItem('user', user);
  }

  get(){
    return localStorage.getItem('token');
  }

  getUser(){
    return localStorage.getItem('user');
  }

  remove(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

}
