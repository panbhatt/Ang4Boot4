import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgInterfacesComponent } from './ng-interfaces.component';

describe('NgInterfacesComponent', () => {
  let component: NgInterfacesComponent;
  let fixture: ComponentFixture<NgInterfacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgInterfacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgInterfacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
