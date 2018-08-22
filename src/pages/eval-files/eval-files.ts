import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ShareProvider } from '../../providers/share/share';

/**
 * Generated class for the EvalFilesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eval-files',
  templateUrl: 'eval-files.html',
})
export class EvalFilesPage {
  employee: any;
  files: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public share: ShareProvider) {
    this.employee = JSON.parse(share.get());
  }

  ionViewDidLoad() {
    if(this.employee){
      this.getEvaluationData();
    }
  }

  getEvaluationData(){
    this.http.get('http://localhost:8000/api/v1/evaluations/'+this.employee.id).subscribe(data => this.handleResponse(data), error => this.handleError(error));
  }

  handleResponse(data){
    this.files = data.data.files;
  }

  handleError(error){
  }

  selectedFile(url){
    window.open(url);
  }

}
