import { Component, OnInit } from '@angular/core';
import * as data from '../config.json';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],  
  animations:[
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn))])
  ]
})

export class AboutComponent implements OnInit {
  fadeIn: any;

  githubReadme: any;
  configData; 
  interests; 
  constructor(public http: HttpClient) { 
    this.configData = data; 
    this.interests = this.configData["about-information"]["interests"];
    console.log(this.interests);
  }

  ngOnInit(): void {
  
  }

}
