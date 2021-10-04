import { Component, OnInit } from '@angular/core';
import * as data from '../config.json';
import { fadeIn } from 'ng-animate';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  useAnimation,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn))])
  ]
})
export class HomeComponent implements OnInit {
fadeIn: any;
configData; 
  constructor() { 
    this.configData = data; 
    console.log(this.configData);
  }

  ngOnInit(): void {
  }

}
