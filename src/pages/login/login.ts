import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../model/user';
import { AngularFireAuth } from 'angularfire2/auth';




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
 user:User={username:'artty',password:'1234'};
 message:string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private auth : AngularFireAuth) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(user:User){
    console.log(user);
    this.auth.auth.signInWithEmailAndPassword(user.username,user.password).then(result=>{
    this.navCtrl.push('FirebasePage')   
    
  }).catch(error=>{
    console.log(error);
    
  })
  
      
    
    /* if(user.username=='artty'&&user.password=='1234'){
      console.log("login");
      this.navCtrl.push('FirebasePage');
      
             
    }else{
     console.log("Not login");
     this.message = 'Username or Password Woring';       
    } */
    
  }

}
