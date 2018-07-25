import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionResponsibilitiesAndGoalsComponent } from './section-responsibilities-and-goals.component';

describe('SectionResponsibilitiesAndGoalsComponent', () => {
  let component: SectionResponsibilitiesAndGoalsComponent;
  let fixture: ComponentFixture<SectionResponsibilitiesAndGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionResponsibilitiesAndGoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionResponsibilitiesAndGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
