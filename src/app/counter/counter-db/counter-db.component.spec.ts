import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterDBComponent } from './counter-db.component';

describe('CounterDBComponent', () => {
  let component: CounterDBComponent;
  let fixture: ComponentFixture<CounterDBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterDBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
