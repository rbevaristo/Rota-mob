import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { EvalFilesPage } from '../eval-files/eval-files';
import { EvalFormPage } from '../eval-form/eval-form';
import { ShareProvider } from '../../providers/share/share';

/**
 * Generated class for the EvaluationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-evaluation',
  templateUrl: 'evaluation.html',
})
export class EvaluationPage {
  employee:any;
  evaluation: any;

  tab1:any;
  tab2:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public share: ShareProvider) {
    this.employee = navParams.get('data');
    this.tab1 = EvalFilesPage;
    // this.tab2 = EvalFormPage;
  }

  ionViewDidLoad() {
    if(this.employee){
      this.getEvaluationData();
    }
  }

  getEvaluationData(){
    this.http.get('http://localhost/rota/public/api/v1/evaluations/'+this.employee.id).subscribe(data => this.handleResponse(data), error => this.handleError(error));
  }

  handleResponse(data){
    this.evaluation = data.data;
    this.share.handle(JSON.stringify(this.employee));
  }

  handleError(error){
  }

}
