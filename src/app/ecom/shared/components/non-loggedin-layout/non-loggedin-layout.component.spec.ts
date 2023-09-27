import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonLoggedinLayoutComponent } from './non-loggedin-layout.component';

describe('NonLoggedinLayoutComponent', () => {
  let component: NonLoggedinLayoutComponent;
  let fixture: ComponentFixture<NonLoggedinLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonLoggedinLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonLoggedinLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
