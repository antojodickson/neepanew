import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplyPage } from './job-apply.page';

describe('JobApplyPage', () => {
  let component: JobApplyPage;
  let fixture: ComponentFixture<JobApplyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobApplyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobApplyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
