import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateResumePage } from './create-resume.page';

describe('CreateResumePage', () => {
  let component: CreateResumePage;
  let fixture: ComponentFixture<CreateResumePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateResumePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateResumePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
