import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginVetPage } from './login-vet.page';

describe('LoginVetPage', () => {
  let component: LoginVetPage;
  let fixture: ComponentFixture<LoginVetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginVetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginVetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
