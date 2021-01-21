import { AppState } from './app.reducers';
import { createSelector } from '@ngrx/store';

export const appState = (state: AppState) => state;

export const sidebar = createSelector(
    appState,
    (state: AppState) => state.sidebar, 
);