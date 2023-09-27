import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { interfaceState } from '../counterStore/counter.store';

@Component({
  selector: 'app-counter-db',
  templateUrl: './counter-db.component.html',
  styleUrls: ['./counter-db.component.scss']
})
export class CounterDBComponent implements OnInit {

  title:any;

  constructor(private store:Store<{count:interfaceState}>) { }

  ngOnInit(): void {
    this.store.select('count').subscribe((data:any)=>{
      console.log(data);
      this.title = data.title;
    });
  }

}
