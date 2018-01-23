import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from '../libs/single-spa-react'; // waiting for this to be merged: https://github.com/CanopyTax/single-spa-react/pull/27
import Root from './root.component.js';

const reactLifecycles = singleSpaReact({
	React,
	ReactDOM,
	rootComponent: Root,
	domElementGetter,
});

export function bootstrap(props) {
	return reactLifecycles.bootstrap(props);
}

export function mount(props) {
	return reactLifecycles.mount(props).then((rootComponent) => {
        rootComponent.setStore(props.customProps.store);
        rootComponent.setGlobalEventDistributor(props.customProps.globalEventDistributor);
    });
}

export function unmount(props) {
	return reactLifecycles.unmount(props);
}

function domElementGetter() {
	// Make sure there is a div for us to render into
	let el = document.getElementById('app1');
	if (!el) {
		el = document.createElement('div');
		el.id = 'app1';
		document.body.appendChild(el);
	}

	return el;
}
