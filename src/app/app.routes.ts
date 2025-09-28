import { Routes } from '@angular/router';
import { Home } from './home/home';
import { AboutMe } from './about-me/about-me';
import { Experiences } from './experiences/experiences';
import { Education } from './education/education';
import { Skills } from './skills/skills';
import { Projects } from './projects/projects';
import { Certificates } from './certificates/certificates';


export const routes: Routes = [
  {
    path:'',
    component: Home,
    children: [
      {path: 'about-me', component: AboutMe},
      {path: 'experiences', component: Experiences},
      {path: 'education', component: Education},
      {path: 'skills', component: Skills},
      {path: 'projects', component: Projects},
      {path: 'certificates', component: Certificates},
      {path: '', redirectTo: 'about-me', pathMatch: 'full'},
    ]
  },
  { path: '***', redirectTo: '' } // redireciona / → /home

];
