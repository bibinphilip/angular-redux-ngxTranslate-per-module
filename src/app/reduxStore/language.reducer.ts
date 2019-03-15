import { ActionReducer, Action } from '@ngrx/store';
import * as language from './language.action';

export function reducer(state: string = 'en', action: language.LanguageAction) {
    switch (action.type) {
        case language.LANGCHANGE:
            return action.language;
        default:
            return state;
    }
}
