import { Component, forwardRef, Inject, OnDestroy } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { CounterActions } from './app.actions';
import { IAppState } from "./store";

@Component({
	selector: 'app2',
	template: `
		<div style="margin-top: 100px;">
			This was rendered by App2 which is written in Angular 4
		</div>

        <div>
            Count: {{ count }}
            <button (click)="increment()">+</button>
            <button (click)="decrement()">-</button>
        </div>
		
		<a [routerLink]="['/subroute1']" routerLinkActive="active">Angular route 1</a>
		<a [routerLink]="['/subroute2']" routerLinkActive="active">Angular route 2</a>

		<router-outlet></router-outlet>
	`,
})
export class App2 {
    count: number;
    subscription;

    constructor(
        @Inject(forwardRef(() => NgRedux)) private ngRedux: NgRedux<IAppState>,
        @Inject(forwardRef(() => CounterActions)) private actions: CounterActions) {
        this.subscription = ngRedux.select<number>('count')
            .subscribe(newCount => this.count = newCount);
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
}
