import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeModule } from './about-me/about-me.module';
import { MySkillsModule } from './my-skills/my-skills.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-me', loadChildren: './about-me/about-me.module#AboutMeModule' },
  { path: 'my-skills', loadChildren: './my-skills/my-skills.module#MySkillsModule'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
