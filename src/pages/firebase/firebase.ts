import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { Observable } from 'rxjs/Observable';
import { Device } from '../../model/device';
/**
 * Generated class for the FirebasePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-firebase',
  templateUrl: 'firebase.html',
})
export class FirebasePage {
devicelist: Device[];
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private db: DatabaseProvider
  ) {

    
  this.getDevice();
  
  
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad FirebasePage');
  }
async getDevice(){
 await this.db.getDevice().subscribe(datalist=>{
  this.devicelist = datalist;

   console.log(this.devicelist);
  })
}
}


