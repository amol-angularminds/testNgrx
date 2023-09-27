import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustdataInputComponent } from './custdata-input.component';

describe('CustdataInputComponent', () => {
  let component: CustdataInputComponent;
  let fixture: ComponentFixture<CustdataInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustdataInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustdataInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
