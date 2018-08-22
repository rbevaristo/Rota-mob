import { Component, ViewChild, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, TextInput, AlertController } from 'ionic-angular';
import { ShareProvider } from '../../providers/share/share';
import { HttpClient } from '@angular/common/http';
import { EvalFilesPage } from '../eval-files/eval-files';

/**
 * Generated class for the EvalFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eval-form',
  templateUrl: 'eval-form.html',
})
export class EvalFormPage {
  forms: any;
  employee: any;
  public form = {
    employee: null,
    quality: null,
    efficiency: null,
    dependability: null,
    job: null,
    attitude:null,
    housekeeping: null,
    reliability: null,
    personal: null,
   judgement:null,
    q: null,
    i: null,
    c: null
  };


  constructor(public navCtrl: NavController, public navParams: NavParams, public share: ShareProvider, public http: HttpClient, public alertCtrl : AlertController) {
    this.employee = JSON.parse(share.get());
  }

  ionViewDidLoad() {

  }


  handleResponse(data){
    const alert = this.alertCtrl.create({
      title: 'Success',
      subTitle: 'Evaluated!',
      buttons: ['OK']
    });
    alert.present();
    
    this.navCtrl.push(EvalFilesPage);
  }

  handleError(error){
    const alert = this.alertCtrl.create({
      title: 'error',
      subTitle: 'There is something Wrong!',
      buttons: ['OK']
    });
    alert.present();
  }

  evaluate(){
    this.form.employee = this.employee.id;
    //console.log(this.form);
    this.http.post('http://localhost:8000/api/v1/evaluate', this.form).subscribe(data => this.handleResponse(data), error => this.handleError(error));
  }


}
