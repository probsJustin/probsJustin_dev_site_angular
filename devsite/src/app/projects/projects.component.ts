import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import * as data from '../config.json';


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})


@Injectable()
  export class ProjectsComponent {
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
        console.log("yes");
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
