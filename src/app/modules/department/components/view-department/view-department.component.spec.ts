import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDepartmentComponent } from './view-department.component';

describe('ViewDepartmentComponent', () => {
  let component: ViewDepartmentComponent;
  let fixture: ComponentFixture<ViewDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
