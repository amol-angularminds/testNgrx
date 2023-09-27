import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment ,decrement,reset } from '../counterStore/counter.action';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.scss']
})
export class CounterButtonComponent implements OnInit {

  constructor(private store:Store<{count:{counter:number}}>) { }

  ngOnInit(): void {
  }
  increment(){
    console.log('work');
    this.store.dispatch(increment());
  }
  decrement(){
    this.store.dispatch(decrement());
  }
  reset(){
    this.store.dispatch(reset());
  }

}
