import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { DashboardPage } from '../dashboard/dashboard';
import { TokenProvider } from '../../providers/token/token';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('username') username;
  @ViewChild('password') password;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public http: HttpClient,
    public auth: AuthProvider,
    public token: TokenProvider
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
        email: this.username.value,
        password: this.password.value
      };

      this.http.post('http://localhost:8000/api/v1/login', form).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
      );
    }
    
  } 

  handleResponse(data){
    this.auth.login();
    this.token.handle(data.access_token);
    this.navCtrl.setRoot(DashboardPage);
  }

  handleError(data){
    const alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Incorrect Username or Password!',
      buttons: ['OK']
    });
    alert.present();
    this.auth.logout();
  }

}
