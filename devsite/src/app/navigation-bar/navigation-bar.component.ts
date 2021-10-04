import { Component, OnInit } from '@angular/core';
import * as data from '../config.json';


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  configData; 
  constructor() { 
    this.configData = data; 
    console.log(this.configData);
  }

  ngOnInit(): void {
  }

}
