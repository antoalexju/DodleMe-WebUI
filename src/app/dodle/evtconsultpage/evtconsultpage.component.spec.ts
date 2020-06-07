import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvtconsultpageComponent } from './evtconsultpage.component';

describe('EvtconsultpageComponent', () => {
  let component: EvtconsultpageComponent;
  let fixture: ComponentFixture<EvtconsultpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvtconsultpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvtconsultpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
