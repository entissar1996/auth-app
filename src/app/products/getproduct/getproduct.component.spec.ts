import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GetproductComponent } from './getproduct.component';

describe('GetproductComponent', () => {
  let component: GetproductComponent;
  let fixture: ComponentFixture<GetproductComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GetproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
