import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeeventlistComponent } from './timeeventlist.component';

describe('TimeeventlistComponent', () => {
  let component: TimeeventlistComponent;
  let fixture: ComponentFixture<TimeeventlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeeventlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeeventlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
