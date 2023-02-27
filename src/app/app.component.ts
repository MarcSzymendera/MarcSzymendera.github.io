import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test2';

  siteIndex = 2;

  setIndex1(){
    this.siteIndex = 1;
  }
  setIndex2(){
    this.siteIndex = 2;
  }
  setIndex3(){
    this.siteIndex = 3;
  }
  setIndex4(){
    this.siteIndex = 4;
  }

}
