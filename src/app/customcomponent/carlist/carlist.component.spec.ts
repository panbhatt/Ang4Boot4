import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarlistComponent } from './carlist.component';

describe('CarlistComponent', () => {
  let component: CarlistComponent;
  let fixture: ComponentFixture<CarlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
