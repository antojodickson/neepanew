import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupsSevenPage } from './signups-seven.page';

describe('SignupsSevenPage', () => {
  let component: SignupsSevenPage;
  let fixture: ComponentFixture<SignupsSevenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupsSevenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupsSevenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
