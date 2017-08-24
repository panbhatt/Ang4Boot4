import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomcomponentComponent } from './customcomponent.component';

describe('CustomcomponentComponent', () => {
  let component: CustomcomponentComponent;
  let fixture: ComponentFixture<CustomcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
