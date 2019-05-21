import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupsSixbPage } from './signups-sixb.page';

describe('SignupsSixbPage', () => {
  let component: SignupsSixbPage;
  let fixture: ComponentFixture<SignupsSixbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupsSixbPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupsSixbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
