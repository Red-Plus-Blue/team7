import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProfessionalDevelopmentPlanComponent } from './section-professional-development-plan.component';

describe('SectionProfessionalDevelopmentPlanComponent', () => {
  let component: SectionProfessionalDevelopmentPlanComponent;
  let fixture: ComponentFixture<SectionProfessionalDevelopmentPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionProfessionalDevelopmentPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionProfessionalDevelopmentPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
