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
    console.log('Hello TokenProvider Provider');
  }

  handle(token){
    this.set(token);
  }

  set(token){
    localStorage.setItem('token', token);
  }

  get(){
    return localStorage.getItem('token');
  }

  remove(){
    localStorage.removeItem('token');
  }

}
