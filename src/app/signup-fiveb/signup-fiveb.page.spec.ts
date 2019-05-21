import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFivebPage } from './signup-fiveb.page';

describe('SignupFivebPage', () => {
  let component: SignupFivebPage;
  let fixture: ComponentFixture<SignupFivebPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupFivebPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFivebPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
