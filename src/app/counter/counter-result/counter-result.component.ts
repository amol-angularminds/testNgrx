import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-result',
  templateUrl: './counter-result.component.html',
  styleUrls: ['./counter-result.component.scss']
})
export class CounterResultComponent implements OnInit {
  conter: any;
  constructor(private store:Store<{count:{counter:number}}>) { }

  ngOnInit(): void {
    this.store.select('count').subscribe(data=>{
      this.conter = data.counter;
    })
  }

}
