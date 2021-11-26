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
  @ViewChild('myTerminal') terminalDiv: ElementRef | undefined
  configData;
  showOnScreenTerminal = true;  
  term: Terminal; 

  constructor() {   
    this.term = new Terminal();
    this.configData = data; 
    console.log(this.terminalDiv)

  }
 
  ngOnInit() {
    if(this.terminalDiv){
      this.term.open(this.terminalDiv.nativeElement);
      this.term.writeln('Welcome to xterm.js');
    }
  }
  
}


