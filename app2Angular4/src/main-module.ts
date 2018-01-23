import {forwardRef, Inject, Injectable, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {App2} from './app2.component';
import {Subroute1} from './subroute1.component';
import {Subroute2} from './subroute2.component';
import {enableProdMode} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {APP_BASE_HREF} from "@angular/common";
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { IAppState, CounterActions } from './app2Store';
import { Globals } from "./globals.service";

const appRoutes: Routes = [
	{
		path: 'subroute1',
		component: Subroute1
	},
	{
		path: 'subroute2',
		component: Subroute2
	},
];

enableProdMode();

@NgModule({
	imports: [
		BrowserModule,
		RouterModule.forRoot(appRoutes, {
			useHash: true
		}),
        NgReduxModule
	],
	providers: [{provide: APP_BASE_HREF, useValue: '/app2/'}, CounterActions, Globals],
	declarations: [
		App2,
		Subroute1,
		Subroute2,
	],
	bootstrap: [App2]
})
export default class MainModule {
    constructor(@Inject(forwardRef(() => NgRedux)) private ngRedux: NgRedux<IAppState>,
                @Inject(forwardRef(() => Globals)) private globals:Globals) {
    }

    setStore(store) {
        this.ngRedux.provideStore(store);
	}

    setGlobalEventDistributor(globalEventDistributor) {
        this.globals.globalEventDistributor = globalEventDistributor;
	}

}
