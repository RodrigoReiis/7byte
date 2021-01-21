import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';

import { environment } from './../../../../environments/environment';
import * as HomeActions from './home.actions';
import { ProductList } from '../../../../utils/models/ProductList.model';
import { throwError, of } from 'rxjs';

@Injectable()

export class HomeEffects {
  private readonly API = environment.API

  constructor(private http: HttpClient, private actions: Actions) {}

  @Effect()
  listProducts = this.actions.pipe(
    ofType(HomeActions.HomeActionsEnum.LIST_PRODUCTS),
    switchMap(() => {
      return this.http.get(this.API.concat('promotion')).pipe(
        map((products: ProductList) => {
          return {
            type: HomeActions.HomeActionsEnum.FETCH_PRODUCTS,
            payload: products,
          }
        })
      )
    }),
    catchError((err) => {
      console.error(err);
      return of(throwError(err))
    })
  )
}
