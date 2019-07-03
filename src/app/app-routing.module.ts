import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitComponent } from './init/init.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { MyprojectsComponent } from './myprojects/myprojects.component';
import { MyskillComponent } from './myskill/myskill.component';
import { HiremeComponent } from './hireme/hireme.component';
import { MyexperiencesComponent } from './myexperiences/myexperiences.component';
import { PreviewComponent } from './preview/preview.component';

const routes: Routes =
  [
    { path: '', component: InitComponent },
    {
      path: 'u', component: MainComponent, children: [{
        path: '#', component: HomeComponent, children:
          [
            { path: '', component: PreviewComponent },
            { path: 'aboutme', component: AboutmeComponent },
            { path: 'myprojects', component: MyprojectsComponent },
            { path: 'myskills', component: MyskillComponent },
            { path: 'hireme', component: HiremeComponent },
            { path: 'myexperiences', component: MyexperiencesComponent }
          ]
      }]
    },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
