import { Component } from '@angular/core';
import { IMqttMessage, MqttService} from "ngx-mqtt";

import { Motor } from '../motors'

@Component({
  selector: 'app-smartmotor-list',
  templateUrl: './smartmotor-list.component.html',
  styleUrls: ['./smartmotor-list.component.css']
})
export class SmartmotorListComponent {

  motors: Motor[];

  constructor(private _mqttService: MqttService) {
    this.motors = []
  }

  ngOnInit(): void {
    this._mqttService.observeRetained("motors/list").subscribe((message: IMqttMessage) => {
      console.log('msg: ', message.payload.toString())
      this.motors = JSON.parse(message.payload.toString())
      console.log(this.motors);
    });
  }

}
