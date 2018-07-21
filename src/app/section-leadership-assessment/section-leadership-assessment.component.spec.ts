import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionLeadershipAssessmentComponent } from './section-leadership-assessment.component';

describe('SectionLeadershipAssessmentComponent', () => {
  let component: SectionLeadershipAssessmentComponent;
  let fixture: ComponentFixture<SectionLeadershipAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionLeadershipAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionLeadershipAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
