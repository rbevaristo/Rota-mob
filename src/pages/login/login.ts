import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { DashboardPage } from '../dashboard/dashboard';
import { TokenProvider } from '../../providers/token/token';
import { EdashboardPage } from '../edashboard/edashboard';

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

  private who;
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

      if(this.validateEmail(this.username.value)){
        let form = {
          email: this.username.value.toLowerCase(),
          password: this.password.value.toLowerCase()
        };
  
        this.http.post('http://localhost/rota/public/api/v1/login', form,{
          headers:{
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With',
            'X-Random-Shit':'123123123'
          }
        }).subscribe(
          data => this.handleResponse(data, DashboardPage),
          error => this.handleError(error)
        );
      } else {
        let form = {
          username: this.username.value.toLowerCase(),
          password: this.password.value.toLowerCase()
        };
  
        this.http.post('http://localhost/rota/public/api/v1/employee/login', form).subscribe(
          data => this.handleResponse(data, EdashboardPage),
          error => this.handleError(error)
        );
      }
      
    }
    
  } 

  validateEmail(email){
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return (re.test(email)) ? true : false; 
  }

  handleResponse(data, page){
    this.auth.login();
    if(page == DashboardPage){
      this.who = 'user';
      this.auth.user();
    } else {
      this.who = 'employee';
      this.auth.employee();
    }
    this.token.handle(data.access_token, this.who);
    this.navCtrl.setRoot(page);
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
