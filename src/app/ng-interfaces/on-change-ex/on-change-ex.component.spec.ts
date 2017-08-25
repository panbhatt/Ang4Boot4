import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnChangeExComponent } from './on-change-ex.component';

describe('OnChangeExComponent', () => {
  let component: OnChangeExComponent;
  let fixture: ComponentFixture<OnChangeExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnChangeExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnChangeExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
