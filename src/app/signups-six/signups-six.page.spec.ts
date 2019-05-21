import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupsSixPage } from './signups-six.page';

describe('SignupsSixPage', () => {
  let component: SignupsSixPage;
  let fixture: ComponentFixture<SignupsSixPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupsSixPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupsSixPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
