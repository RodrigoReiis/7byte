import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';

import { environment } from './../../../../../environments/environment';
import * as SidebarActions from './sidebar.actions';
import { of, throwError } from 'rxjs';
import { SidebarLink } from 'src/utils/models/SidebarLink.model';

@Injectable()

export class SidebarEffects {
    private readonly API = environment.API;

    constructor(private http: HttpClient, private actions: Actions) {}

    @Effect()
    listSidebar = this.actions.pipe(
        ofType(SidebarActions.SidebarActionsEnum.LIST_SIDEBAR),
        switchMap(() => {
            return this.http.get(this.API.concat('routes')).pipe(
                map((links: SidebarLink[]) => {
                    return {
                        type: SidebarActions.SidebarActionsEnum.FETCH_SIDEBAR,
                        payload: links,
                    }
                })
            )
        }),
        catchError((err) => {
            console.error(err);
            return of(throwError(err));
        })
    )
}