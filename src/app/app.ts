import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    EducationComponent,
    ContactComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
