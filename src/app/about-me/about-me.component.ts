import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../reduxStore';

@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.component.html',
    styleUrls: []
})
export class AboutMeComponent implements OnInit, OnDestroy {

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
