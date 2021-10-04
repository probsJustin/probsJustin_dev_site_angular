import { Component, OnInit } from '@angular/core';
import * as data from '../config.json';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  configData; 
  constructor() { 
    this.configData = data; 
    console.log(this.configData);
  }

  ngOnInit(): void {
  }

}
