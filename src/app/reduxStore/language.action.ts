import { Action } from '@ngrx/store';

export const LANGCHANGE = '[LANGUAGE] Change';

export class LanguageAction implements Action {
    type = LANGCHANGE;

    constructor(public language: string) {}
}
