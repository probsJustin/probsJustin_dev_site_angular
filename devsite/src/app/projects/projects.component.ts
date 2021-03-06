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
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations:[
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn))])
  ]
})


@Injectable()
  export class ProjectsComponent {
    fadeIn: any;

    githubData: any;
    githubData_names = Array();
    githubData_sorted = Array();
    configData; 

      constructor(public http: HttpClient) { 
        this.configData = data; 
        console.log(this.configData);
      }

      
    
      ngOnInit() { 
        this.githubData = this.http.get("https://api.github.com/users/probsJustin/repos?per_page=10000");
        debugFlags.flag("debugGithubOutput", this.githubData);
        console.log(this.githubData.subscribe(
          (data: any[]) => {
            this.githubData_names = data;
            this.githubData_names.forEach(element => {
              this.githubData_sorted.push(element)
            })
            this.githubData_sorted.sort(this.sortByUpdatedAtFunction);
            console.log(this.githubData_sorted);
          }
        ));
      }

      sortByUpdatedAtFunction(a: any, b: any){
        if(a["updated_at"] === b["updated_at"]){
          return 0; 
        }else{
          if(a["updated_at"] < b["updated_at"]){
            return 1; 
          }else{
            return -1;
          }
        }

      }
    
    }
