import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  iteamsActive = [true,false,false,false,false];

  constructor() {

  }

  ngOnInit(): void {
  }

  navClick($event : MouseEvent,index : number) {
    for(let i = 0 ; i < this.iteamsActive.length ; i++) {
      this.iteamsActive[i] = false;
    }
      this.iteamsActive[index] = true;
  }
}
