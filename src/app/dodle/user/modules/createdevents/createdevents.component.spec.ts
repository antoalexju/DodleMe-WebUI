import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedeventsComponent } from './createdevents.component';

describe('CreatedevtlistComponent', () => {
  let component: CreatedeventsComponent;
  let fixture: ComponentFixture<CreatedeventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedeventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
