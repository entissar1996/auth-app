import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListproductComponent } from './listproduct.component';

describe('ListproductComponent', () => {
  let component: ListproductComponent;
  let fixture: ComponentFixture<ListproductComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
