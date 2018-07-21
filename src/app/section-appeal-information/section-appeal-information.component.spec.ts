import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAppealInformationComponent } from './section-appeal-information.component';

describe('SectionAppealInformationComponent', () => {
  let component: SectionAppealInformationComponent;
  let fixture: ComponentFixture<SectionAppealInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionAppealInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionAppealInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
