import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSermonComponent } from './add-sermon.component';

describe('AddSermonComponent', () => {
  let component: AddSermonComponent;
  let fixture: ComponentFixture<AddSermonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSermonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSermonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
