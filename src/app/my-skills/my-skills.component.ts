import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as fromRoot from '../reduxStore';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-my-skills',
    templateUrl: './my-skills.component.html',
    styleUrls: []
})
export class MySkillsComponent implements OnInit, OnDestroy {

    lang$: Observable<string>;
    langSub: Subscription;

    constructor(private readonly translateService: TranslateService, private readonly store: Store<fromRoot.State>) {
        this.lang$ = this.store.select(fromRoot.getCurrentLanguage);
    }

    ngOnInit() {
        this.langSub = this.lang$.subscribe(lang => this.translateService.use(lang));
    }

    ngOnDestroy() {
        this.langSub.unsubscribe();
    }

}
