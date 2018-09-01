import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, TextInput } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  @ViewChild('name') name;
  @ViewChild('email') email;
  @ViewChild('message') message : TextInput;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public api: ApiProvider) {
  }

  ionViewDidLoad() {
    
  }

  send() {
    if(this.name.value == "" || this.email.value == "" || this.message.value == "")
    {
      const alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Please fill all the fields',
        buttons: ['OK']
      });
      alert.present();
    }
    else 
    {
      let loading = this.loadingCtrl.create({
        content: 'Sending Message'
      });

      loading.present();

      setTimeout(() => {
        loading.dismiss();
      }, 3000);

      if(this.validateEmail(this.email.value)){
        let form = {
          name: this.name.value,
          email: this.email.value,
          message: this.message.value
        };
        
        this.api.send(form).subscribe(
          data => this.handleResponse(data),
          error => this.handleError(error)
        );
      }
    }
  }
  validateEmail(email){
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return (re.test(email)) ? true : false; 
  }

  
  handleResponse(data){
    const alert = this.alertCtrl.create({
      title: 'Success',
      subTitle: data.data,
      buttons: ['OK']
    });
    alert.present();
    this.name.clearInput;
    this.email.clearInput;
    this.message.clearInput;
  }

  handleError(data){
    const alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'There must be something wrong!',
      buttons: ['OK']
    });
    alert.present();
  }
}
