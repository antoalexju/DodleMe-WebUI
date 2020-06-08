import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvtanswerpageComponent } from './evtanswerpage.component';

describe('EvtanswerpageComponent', () => {
  let component: EvtanswerpageComponent;
  let fixture: ComponentFixture<EvtanswerpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvtanswerpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvtanswerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
