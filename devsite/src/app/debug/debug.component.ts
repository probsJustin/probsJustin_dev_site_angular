import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  useAnimation,
  // ...
} from '@angular/animations';
import * as data from '../config.json';
import { fadeIn } from 'ng-animate';
import debugFlags from '../../debugFlags'; 


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.css'],
  animations:[
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn))])
  ]
})


@Injectable()
  export class DebugComponent {
    
      }
    
    }
