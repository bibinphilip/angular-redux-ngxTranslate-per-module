import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subject } from 'rxjs';
import * as fromRoot from './reduxStore';
import { Store } from '@ngrx/store';
import { LanguageAction } from './reduxStore/language.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
 
  langText = 'English';
  langKV = {
    'en': 'English',
    'fr': 'Français',
    'nl': 'Nederlands'
  };

  language = new Subject<string>();
  lang$: Observable<string>;

  constructor(private translationService: TranslateService,
    private store: Store<fromRoot.State>) {
    this.translationService.setDefaultLang('en');
    this.lang$ = this.store.select(fromRoot.getCurrentLanguage);
  }

  ngOnInit() {
    this.language
      .subscribe(lang => {
        this.store.dispatch(new LanguageAction(lang));
        this.langText = this.langKV[lang];
      });

    this.lang$.subscribe(lang => this.translationService.use(lang));
  }

  ngOnDestroy() {
    this.language.next();
    this.language.complete();
  }
}
