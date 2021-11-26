import { Component, OnInit, ElementRef } from '@angular/core';
import { ViewEncapsulation, ViewChild } from '@angular/core'
import * as data from '../config.json';
import { Terminal } from "xterm";
import debugFlags from '../../debugFlags';


@Component({
 
  encapsulation: ViewEncapsulation.None,
  selector: 'app-onscreenTerminal',
  templateUrl: './onscreenTerminal.component.html',
  styleUrls: ['./onscreenTerminal.component.css']

})

export class OnScreenTerminalComponent {
  configData;
  showOnScreenTerminal = true;  
  container: HTMLCollectionOf<any>; 

  constructor() {
    this.configData = data; 
    this.container = document.getElementsByClassName("line1")
    console.log(this.container.item(0));
  }
 
  addTextToScreen(textToAdd: any){
    this.container.item(0).innerHTML = this.container.item(0).innerHTML + '<BR>' + textToAdd;
  }

  clearScreen(){
    this.container.item(0).innerHTML = "";

  }
  ngOnInit() {
    this.addTextToScreen("things and such");
    console.log(this.container.item(0).innerHTML);
  }
  
}


