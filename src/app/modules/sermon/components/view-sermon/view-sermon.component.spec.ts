import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSermonComponent } from './view-sermon.component';

describe('ViewSermonComponent', () => {
  let component: ViewSermonComponent;
  let fixture: ComponentFixture<ViewSermonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSermonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSermonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
