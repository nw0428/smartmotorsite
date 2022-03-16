import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SmartmotorComponent } from './smartmotor/smartmotor.component';
import { SmartmotorListComponent } from './smartmotor-list/smartmotor-list.component';


import { IMqttServiceOptions, MqttModule } from "ngx-mqtt";
import { environment as env } from '../environments/environment';
import { ScatterComponent } from './scatter/scatter.component';

const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
    hostname: env.mqtt.server,
    port: env.mqtt.port,
    protocol: (env.mqtt.protocol === "wss") ? "wss" : "ws",
    path: '',
};

@NgModule({
  declarations: [
    AppComponent,
    SmartmotorComponent,
    SmartmotorListComponent,
    ScatterComponent
  ],
  imports: [
    BrowserModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS),
    RouterModule.forRoot([
      { path: '', component: SmartmotorListComponent },
      { path: 'motors/:motorId', component: SmartmotorComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
