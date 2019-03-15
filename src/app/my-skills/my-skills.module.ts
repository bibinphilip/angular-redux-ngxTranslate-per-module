import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MySkillsRoutingModule } from './my-skills-routing.module';
import { MySkillsComponent } from './my-skills.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/locale/my-skills.', '.json');
}

@NgModule({
  declarations: [MySkillsComponent],
  imports: [
    CommonModule,
    MySkillsRoutingModule,
    SharedModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    }),
  ]
})
export class MySkillsModule { }
