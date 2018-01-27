import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Device } from '../../model/device';
import { get } from '@ionic-native/core';
/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {
  

  constructor( 
    public http: HttpClient,
    private databaseRD:AngularFireDatabase
  ){
    console.log('Hello DatabaseProvider Provider');
  
  }
getDevice():FirebaseListObservable<Device[]>{
 return this.databaseRD.list('/device');
}
 
switchDevice(key,device: Device){
  this.databaseRD.list('/device');
}
}
