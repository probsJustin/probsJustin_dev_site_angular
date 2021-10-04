import { Component, HostBinding } from '@angular/core';
import { fadeIn } from 'ng-animate';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  useAnimation,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  animations:[
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn))])
  ]
})

export class AppComponent {
  title = 'ProbsJustin';
  fadeIn: any;

  constructor(){
  }


}
