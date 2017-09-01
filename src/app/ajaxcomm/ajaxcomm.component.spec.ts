import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjaxcommComponent } from './ajaxcomm.component';

describe('AjaxcommComponent', () => {
  let component: AjaxcommComponent;
  let fixture: ComponentFixture<AjaxcommComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjaxcommComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjaxcommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
