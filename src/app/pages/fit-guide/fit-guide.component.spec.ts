import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitGuideComponent } from './fit-guide.component';

describe('FitGuideComponent', () => {
  let component: FitGuideComponent;
  let fixture: ComponentFixture<FitGuideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FitGuideComponent]
    });
    fixture = TestBed.createComponent(FitGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
