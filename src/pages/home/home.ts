import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { LoginPage } from '../login/login';
import { DashboardPage } from '../dashboard/dashboard';
import { EdashboardPage } from '../edashboard/edashboard';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public loadingCtrl:LoadingController, public auth:AuthProvider) {

  }
  ionViewDidLoad() {
    //console.log(localStorage.getItem('token'));
    if(localStorage.getItem('token')){
      this.auth.login();

      let loading = this.loadingCtrl.create({
        content: 'Redirecting to dashboard...'
      });
    
      loading.present();
    
      setTimeout(() => {
        loading.dismiss();
      }, 3000);
      if(localStorage.getItem('user') == 'user'){
        
        this.auth.user();
        this.navCtrl.setRoot(DashboardPage);
      } else {
        this.auth.employee();
        this.navCtrl.setRoot(EdashboardPage);
      }
    }
  }
  login() {
    this.navCtrl.setRoot(LoginPage);
  }

}
