import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ShareProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ShareProvider {
  employee: any
  constructor(public http: HttpClient) {
   
  }

  handle(data){
    this.set(data);
  }

  set(data){
    localStorage.setItem('employee', data);
  }

  get(){
    return localStorage.getItem('employee');
  }

  remove(){
    return localStorage.removeItem('employee');
  }

}
