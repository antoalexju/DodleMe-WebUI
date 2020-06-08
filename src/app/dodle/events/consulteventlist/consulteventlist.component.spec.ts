import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulteventlistComponent } from './consulteventlist.component';

describe('ConsulteventlistComponent', () => {
  let component: ConsulteventlistComponent;
  let fixture: ComponentFixture<ConsulteventlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulteventlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulteventlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
