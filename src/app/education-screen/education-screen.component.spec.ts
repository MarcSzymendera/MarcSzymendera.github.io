import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationScreenComponent } from './education-screen.component';

describe('EducationScreenComponent', () => {
  let component: EducationScreenComponent;
  let fixture: ComponentFixture<EducationScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
