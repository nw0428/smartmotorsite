import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMqttMessage, MqttService} from "ngx-mqtt";

import { Motor } from '../motors'


@Component({
  selector: 'app-smartmotor',
  templateUrl: './smartmotor.component.html',
  styleUrls: ['./smartmotor.component.css']
})
export class SmartmotorComponent implements OnInit {

  motor: Motor | undefined;
  motors: Motor[];


  constructor(private route: ActivatedRoute, private _mqttService: MqttService) {
    this.motors = []
  }

  ngOnInit() {
    // First get the motor id from the current route.
    const motorIdFromRoute = Number(this.route.snapshot.paramMap.get('motorId'));

    this._mqttService.observeRetained("motors/list").subscribe((message: IMqttMessage) => {
      console.log('msg: ', message.payload.toString())
      this.motors = JSON.parse(message.payload.toString())
      console.log(this.motors);
    });

    // Find the motor that correspond with the id provided in route.
    this.motor = this.motors.find(motor => motor.id === motorIdFromRoute);
  }

}
