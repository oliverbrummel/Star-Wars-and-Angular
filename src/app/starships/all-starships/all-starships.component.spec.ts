import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStarshipsComponent } from './all-starships.component';

describe('AllStarshipsComponent', () => {
  let component: AllStarshipsComponent;
  let fixture: ComponentFixture<AllStarshipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllStarshipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllStarshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
