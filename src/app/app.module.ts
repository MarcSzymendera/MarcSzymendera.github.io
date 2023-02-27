import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EducationScreenComponent } from './education-screen/education-screen.component';
import { WorkExperienceScreenComponent } from './work-experience-screen/work-experience-screen.component';
import { ProjectsScreenComponent } from './projects-screen/projects-screen.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { SkillsScreenComponent } from './skills-screen/skills-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    EducationScreenComponent,
    WorkExperienceScreenComponent,
    ProjectsScreenComponent,
    HomeScreenComponent,
    SkillsScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
