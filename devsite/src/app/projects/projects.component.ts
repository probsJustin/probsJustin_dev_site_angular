import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    
      constructor(public http: HttpClient) { 

        
      }
    
      ngOnInit() { 
        this.githubData = this.httpGet1("https://api.github.com/users/probsJustin/repos?per_page=10000");
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
      
      httpGet1(theUrl: any)
      {
        return this.http.get(theUrl);
      }
    }
