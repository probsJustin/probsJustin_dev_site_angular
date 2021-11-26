import { Component, OnInit } from '@angular/core';
import * as data from '../config.json';



@Component({
  selector: 'app-onscreenTerminal',
  templateUrl: './onscreenTerminal.component.html',
  styleUrls: ['./onscreenTerminal.component.css']
})
export class OnScreenTerminalComponent implements OnInit {
  configData; 
  constructor() { 
    this.configData = data; 
    console.log(this.configData);
  }

  ngOnInit(): void {
  }

}
