import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MySkillsComponent } from './my-skills.component';

const routes: Routes = [{
  path: '',
  component: MySkillsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MySkillsRoutingModule { }
