import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateCounterBy, updateT } from '../counterStore/counter.action';
import { interfaceState } from '../counterStore/counter.store';

@Component({
  selector: 'app-custdata-input',
  templateUrl: './custdata-input.component.html',
  styleUrls: ['./custdata-input.component.scss']
})
export class CustdataInputComponent implements OnInit {


  constructor(private store:Store<{count:interfaceState}>) { }

  ngOnInit(): void {

  }

  changeTitle(data:any){
    this.store.dispatch(updateT({title: data.value}));
  }
  
  changeCounter(data:any){
    console.log(data.value);
    this.store.dispatch(updateCounterBy({counter:+data.value}));
  }

}
