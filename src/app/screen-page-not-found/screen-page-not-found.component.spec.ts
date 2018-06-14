import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenPageNotFoundComponent } from './screnn-page-not-found.component';

describe('ScreenPageNotFoundComponent', () => {
  let component: ScreenPageNotFoundComponent;
  let fixture: ComponentFixture<ScreenPageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenPageNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenPageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
