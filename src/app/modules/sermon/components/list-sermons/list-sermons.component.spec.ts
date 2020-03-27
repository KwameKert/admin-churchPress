import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSermonsComponent } from './list-sermons.component';

describe('ListSermonsComponent', () => {
  let component: ListSermonsComponent;
  let fixture: ComponentFixture<ListSermonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSermonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSermonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
