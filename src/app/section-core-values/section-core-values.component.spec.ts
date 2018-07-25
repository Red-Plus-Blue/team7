import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCoreValuesComponent } from './section-core-values.component';

describe('SectionCoreValuesComponent', () => {
  let component: SectionCoreValuesComponent;
  let fixture: ComponentFixture<SectionCoreValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionCoreValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCoreValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
