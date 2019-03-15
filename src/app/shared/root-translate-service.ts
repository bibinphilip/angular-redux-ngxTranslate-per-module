import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class RootTranslateService {
    // this will give the AppModule or the root module's TranslateService object via injection (DI)
    constructor(readonly TranslateService: TranslateService) { }
}
