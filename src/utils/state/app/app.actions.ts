import { Action } from '@ngrx/store';

export enum AppActionsEnum {
	CLEAR_STORE = '[APP] ClearStore',
}

export class ClearStore implements Action {
	readonly type = AppActionsEnum.CLEAR_STORE;
}

export type AppActions = ClearStore;
