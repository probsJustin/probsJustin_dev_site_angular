import { Component, OnInit } from '@angular/core';
import * as data from '../config.json';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {


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
