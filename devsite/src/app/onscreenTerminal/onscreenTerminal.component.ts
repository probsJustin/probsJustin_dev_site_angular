import { Component, OnInit, ElementRef } from '@angular/core';
import { ViewEncapsulation, ViewChild } from '@angular/core'
import * as data from '../config.json';
import debugFlags from '../../debugFlags';
import SocketIO from 'socket.io';


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
  socket: any; 
  constructor() {
    this.configData = data; 
    this.container = document.getElementsByClassName("line1")
    console.log(this.container.item(0));
    const socket = SocketIO();
    socket.on('connection', client=> {
      client.on('event', data=> {

      })
      client.on('disconnect', () => {

      })
    }) 
    socket.listen(3000);
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


