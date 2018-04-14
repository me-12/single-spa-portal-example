import {Inject, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {App5} from './app5.component';
import {Subroute1} from './subroute1.component';
import {Subroute2} from './subroute2.component';
import {enableProdMode} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {APP_BASE_HREF} from "@angular/common";
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { IAppState, CounterActions } from './store';
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
	providers: [{provide: APP_BASE_HREF, useValue: '/app5/'}, CounterActions, Globals],
	declarations: [
		App5,
		Subroute1,
		Subroute2,
	],
	bootstrap: [App5]
})
export class MainModule {
    constructor(private ngRedux: NgRedux<IAppState>,
                private globals:Globals,
                @Inject('localStoreRef') private localStoreRef: any,
                @Inject('globalEventDispatcherRef') private globalEventDispatcherRef: any) {

        this.ngRedux.provideStore(localStoreRef);
        this.globals.globalEventDistributor = globalEventDispatcherRef;
    }
}
