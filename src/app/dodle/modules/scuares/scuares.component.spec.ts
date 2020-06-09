import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScuaresComponent } from './scuares.component';

describe('ScuaresComponent', () => {
  let component: ScuaresComponent;
  let fixture: ComponentFixture<ScuaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScuaresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScuaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
