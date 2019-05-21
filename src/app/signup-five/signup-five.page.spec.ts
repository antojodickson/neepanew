import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFivePage } from './signup-five.page';

describe('SignupFivePage', () => {
  let component: SignupFivePage;
  let fixture: ComponentFixture<SignupFivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupFivePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
