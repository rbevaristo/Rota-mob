import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { TokenProvider } from '../../providers/token/token';
import { EdashboardPage } from '../edashboard/edashboard';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the EloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-elogin',
  templateUrl: 'elogin.html',
})
export class EloginPage {
  @ViewChild('username') username;
  @ViewChild('password') password;

  private who;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public http: HttpClient,
    public auth: AuthProvider,
    public token: TokenProvider,
    public api: ApiProvider
    ) {
  }

  ionViewDidLoad() {
   
  }

  result: any;

  signin(){
    if(this.username.value == "" || this.password.value == ""){
      const alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Please enter username and password',
        buttons: ['OK']
      });
      alert.present();
    } else {
      let loading = this.loadingCtrl.create({
        content: 'Verifying Credentials...'
      });
    
      loading.present();
    
      setTimeout(() => {
        loading.dismiss();
      }, 3000);

      let form = {
        username: this.username.value,
        password: this.password.value
      };

      this.isEmployee(form);
    }
  }


  isEmployee(form){
    this.api.elogin(form).subscribe(
      data => this.handleResponse(data, EdashboardPage),
      error => this.handleError(error)
    )
  }

  handleResponse(data, page){
    console.log(data);
    this.auth.login();
    this.who = 'employee';
    this.auth.employee();
    this.token.handle(data.access_token, this.who);
    this.navCtrl.setRoot(page);
  }

  handleError(data){
    console.log(data);
    const alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Incorrect Username or Password!',
      buttons: ['OK']
    });
    alert.present();
    this.auth.logout();
  }

}
