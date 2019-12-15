import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XFormlyComponent } from './x-formly.component';

describe('XFormlyComponent', () => {
  let component: XFormlyComponent;
  let fixture: ComponentFixture<XFormlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XFormlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XFormlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
