import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSignaturesComponent } from './section-signatures.component';

describe('SectionSignaturesComponent', () => {
  let component: SectionSignaturesComponent;
  let fixture: ComponentFixture<SectionSignaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionSignaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSignaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
