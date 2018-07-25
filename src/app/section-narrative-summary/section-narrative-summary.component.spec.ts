import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionNarrativeSummaryComponent } from './section-narrative-summary.component';

describe('SectionNarrativeSummaryComponent', () => {
  let component: SectionNarrativeSummaryComponent;
  let fixture: ComponentFixture<SectionNarrativeSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionNarrativeSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionNarrativeSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
