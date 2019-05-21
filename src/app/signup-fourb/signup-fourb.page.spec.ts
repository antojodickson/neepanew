import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFourbPage } from './signup-fourb.page';

describe('SignupFourbPage', () => {
  let component: SignupFourbPage;
  let fixture: ComponentFixture<SignupFourbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupFourbPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFourbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
