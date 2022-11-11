import { Component } from '@angular/core';
import {Platform} from '@ionic/angular'; 
declare var cordova;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

//Cordova SDK initialization

export class HomePage {

  constructor(public platform: Platform) {  
    this.platform.ready().then(() => {  
      var singularConfig = new cordova.plugins.SingularCordovaSdk.SingularConfig("Insert your SDK key", "Insert your Secret Key");

  // Optional: Enable deep linking (requires additional setup steps, see guide)
  var linkHandler = function(data){
  var deeplink = data.deeplink;
  var passthrough = data.passthrough;
  var isDeferred = data.isDeferred;
  // Add link handling logic here
  }
  singularConfig.withSingularLink(linkHandler);
  cordova.plugins.SingularCordovaSdk.init(singularConfig);  
   }); 
  }}  
