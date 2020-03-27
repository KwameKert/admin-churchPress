import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSermonsComponent } from './update-sermons.component';

describe('UpdateSermonsComponent', () => {
  let component: UpdateSermonsComponent;
  let fixture: ComponentFixture<UpdateSermonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSermonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSermonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
