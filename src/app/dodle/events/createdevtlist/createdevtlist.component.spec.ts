import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedevtlistComponent } from './createdevtlist.component';

describe('CreatedevtlistComponent', () => {
  let component: CreatedevtlistComponent;
  let fixture: ComponentFixture<CreatedevtlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedevtlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedevtlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
