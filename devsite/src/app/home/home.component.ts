import { Component, OnInit } from '@angular/core';
import * as data from '../config.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
configData; 
  constructor() { 
    this.configData = data; 
    console.log(this.configData);
  }

  ngOnInit(): void {
  }

}
