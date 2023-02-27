import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperienceScreenComponent } from './work-experience-screen.component';

describe('WorkExperienceScreenComponent', () => {
  let component: WorkExperienceScreenComponent;
  let fixture: ComponentFixture<WorkExperienceScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkExperienceScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkExperienceScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
