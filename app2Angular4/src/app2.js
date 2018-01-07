import 'zone.js';
import 'reflect-metadata';
import singleSpaAngular from 'single-spa-angular2';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import mainModule from './main-module.ts';
import {Router} from '@angular/router';

const ngLifecycles = singleSpaAngular({
	domElementGetter,
	mainModule,
	angularPlatform: platformBrowserDynamic(),
	template: `<app2 />`,
	Router,
})

export function bootstrap(props) {
	return ngLifecycles.bootstrap(props);
}

export function mount(props) {
	return ngLifecycles.mount(props);
}

export function unmount(props) {
	return ngLifecycles.unmount(props);
}

function domElementGetter() {
	// Make sure there is a div for us to render into
	let el = document.getElementById('app2');
	if (!el) {
		el = document.createElement('div');
		el.id = 'app2';
		document.body.appendChild(el);
	}

	return el;
}
