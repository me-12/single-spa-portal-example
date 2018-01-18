import {forwardRef, Inject, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {App2} from './app2.component';
import {Subroute1} from './subroute1.component';
import {Subroute2} from './subroute2.component';
import {enableProdMode} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {APP_BASE_HREF} from "@angular/common";
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { rootReducer, IAppState, INITIAL_STATE } from './store';
import { CounterActions } from './app.actions';

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
	providers: [{provide: APP_BASE_HREF, useValue: '/app2/'}, CounterActions],
	declarations: [
		App2,
		Subroute1,
		Subroute2,
	],
	bootstrap: [App2]
})
export default class MainModule {
    constructor(@Inject(forwardRef(() => NgRedux)) ngRedux: NgRedux<IAppState>) {
        ngRedux.configureStore(
            rootReducer,
            INITIAL_STATE);
    }
}
