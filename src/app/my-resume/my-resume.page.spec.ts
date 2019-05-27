import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyResumePage } from './my-resume.page';

describe('MyResumePage', () => {
  let component: MyResumePage;
  let fixture: ComponentFixture<MyResumePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyResumePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyResumePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
