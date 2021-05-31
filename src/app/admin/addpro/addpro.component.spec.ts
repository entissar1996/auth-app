import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproComponent } from './addpro.component';

describe('AddproComponent', () => {
  let component: AddproComponent;
  let fixture: ComponentFixture<AddproComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddproComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
