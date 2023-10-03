import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  isFlipped : any;
  constructor() { }

  ngOnInit(): void {
  }

  flipCard(){
    this.isFlipped = !this.isFlipped; 
  }
}
