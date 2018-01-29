import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { Observable } from 'rxjs/Observable';
import { Device } from '../../model/device';
import { NgModuleCompileResult } from '@angular/compiler/src/ng_module_compiler';
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
dataobject : Device = new Device(
'',0,'','08.00','12.00','19.00');

timeNow:Date; 

constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private db: DatabaseProvider
  )
  
  {
    setInterval(() => {         //replaced function() by ()=>
      this.timeNow = new Date();
      console.log(this.timeNow); // just testing if it is working
    }, 30000);
    
     console.log(this.dataobject);
     
    
    
  this.getDevice();
  
  
  
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad FirebasePage');
  }
async getDevice(){
 await this.db.searchListDevice('','').subscribe(datalist=>{
  this.devicelist = datalist;

   console.log(this.devicelist);
  })
}
switchDevice(device){
  console.log('Deviec',device.$key);
  if(device.control===1){
    console.log('Deviec',0);
    this.db.switchDevice(device.$key,0);
    
  }
  if(device.control===0){
    console.log('Deviec',1);
    this.db.switchDevice(device.$key,1);
  
  }
  
}
  setTime(device){
    console.log(device);
    this.db.updateObjectDevice('light bulb',device).then()
 
  }

        
}






