import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvtcreatepageComponent } from './evtcreatepage.component';

describe('EvtcreatepageComponent', () => {
  let component: EvtcreatepageComponent;
  let fixture: ComponentFixture<EvtcreatepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvtcreatepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvtcreatepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
