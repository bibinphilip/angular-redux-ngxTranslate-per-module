import * as fromRoot from './language.reducer';

export interface State {
    language: string;
}

export const reducers = {
    language: fromRoot.reducer
};

// Selectors
export const getCurrentLanguage = (state: State) => state.language;
