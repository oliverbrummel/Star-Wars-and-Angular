import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSpeciesComponent } from './all-species.component';

describe('AllSpeciesComponent', () => {
  let component: AllSpeciesComponent;
  let fixture: ComponentFixture<AllSpeciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSpeciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSpeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
