import { Component, forwardRef, Inject } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState, CounterActions } from "./store";
import {Globals} from "./globals.service";
import * as angularImg from "../assets/angular-logo.png";

@Component({
	selector: 'app5',
	template: `
		<div style="margin-top: 100px;">
            <img [src]="angularImg" style="width: 100px;"/> <br />
			This was rendered by App5 which is written in Angular 6
		</div>
        <br />

        <div>
            <b> Count: {{ count }}</b><br/><br/>
            <button (click)="increment()">local increment</button>&nbsp;Send a <b>local</b> increment event. This will
            only increase the counter for the current app. <br/>
            
            <button (click)="decrement()">local decrement</button>&nbsp;Send a <b>local</b> decrement event. This will
            only decrement the counter for the current app. <br/>

            
            <button (click)="globalIncrement()">global increment</button>&nbsp;Send a <b>global</b> increment event.
            This will increase the counter for the current app and all other apps that listen to this event. <br/>
            
            <button (click)="globalDecrement()">global decrement</button>&nbsp;Send a <b>global</b> decrement event.
            This will increase the counter for the current app and all other apps that listen to this event. <br/>
        </div>
		
        <br />
		<a [routerLink]="['/subroute1']" routerLinkActive="active">Angular route 1</a>&nbsp;
		<a [routerLink]="['/subroute2']" routerLinkActive="active">Angular route 2</a>

		<router-outlet></router-outlet>
	`,
})
export class App5 {
    count: number;
    angularImg: any;
    subscription;

    constructor(
        @Inject(forwardRef(() => NgRedux)) private ngRedux: NgRedux<IAppState>,
        @Inject(forwardRef(() => CounterActions)) private actions: CounterActions,
        @Inject(forwardRef(() => Globals)) private globals:Globals) {
        this.subscription = ngRedux.select<number>('count')
            .subscribe(newCount => this.count = newCount);
        this.angularImg = angularImg;
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    increment() {
        this.ngRedux.dispatch(this.actions.increment());
    }

    decrement() {
        this.ngRedux.dispatch(this.actions.decrement());
    }

    globalIncrement() {
        this.globals.globalEventDistributor.dispatch(this.actions.increment());
    }

    globalDecrement() {
        this.globals.globalEventDistributor.dispatch(this.actions.decrement());
    }
}
