import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { appReducers, clearState } from './../utils/state/app/app.reducers';
import { SidebarEffects } from './../app/layout/components/sidebar/store/sidebar.effects';
import { HomeEffects } from './../app/layout/home/store/home.effects';
import { ProductsEffects } from './../app/layout/products/store/products.effects';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    RouterModule,
    StoreModule.forRoot(appReducers, { metaReducers: [clearState] }),
    EffectsModule.forRoot([SidebarEffects, HomeEffects, ProductsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
