import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';
import { ExperienceComponent } from './experience/experience.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' ,title:'Home'},
  { path: 'home', component: HomeComponent ,title:'Home'},
  { path: 'about', component: AboutComponent ,title:'About'},
  { path: 'skills', component: SkillsComponent ,title:'Skills'},
  {
    path: 'work', component: WorkComponent, children: [
      { path: 'graphic', component: WorkComponent },
      { path: 'apps', component: WorkComponent },
      { path: 'software', component: WorkComponent },
    ]
  ,title:'Work'},
  { path: 'experience', component: ExperienceComponent,title:'experience'},
  { path: '**', component: NotfoundComponent ,title:'Notfound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
