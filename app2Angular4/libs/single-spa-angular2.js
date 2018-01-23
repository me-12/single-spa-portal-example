'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = singleSpaAngular2;
var defaultOpts = {
	// required opts
	domElementGetter: null,
	angularPlatform: null,
	mainModule: null,
	template: null,
	// optional opts
	Router: null
};

function singleSpaAngular2(userOpts) {
	if ((typeof userOpts === 'undefined' ? 'undefined' : _typeof(userOpts)) !== 'object') {
		throw new Error('single-spa-angular2 requires a configuration object');
	}

	var opts = _extends({}, defaultOpts, userOpts);

	if (typeof opts.domElementGetter !== 'function') {
		throw new Error('single-spa-angular2 must be passed opts.domElementGetter function');
	}

	if (!opts.angularPlatform) {
		throw new Error('single-spa-angular2 must be passed opts.angularPlatform. Usually this should be the return value of platformBrowserDynamic()');
	}

	if (!opts.mainModule) {
		throw new Error('single-spa-angular2 must be passed opts.mainModule, which is the Angular module to bootstrap');
	}

	if (typeof opts.template !== 'string') {
		throw new Error('single-spa-angular2 must be passed opts.template string');
	}

	return {
		bootstrap: bootstrap.bind(null, opts),
		mount: mount.bind(null, opts),
		unmount: unmount.bind(null, opts)
	};
}

function bootstrap(opts) {
	return Promise.resolve();
}

function mount(opts) {
	var containerEl = getContainerEl(opts);
	containerEl.innerHTML = opts.template;
	return opts.angularPlatform.bootstrapModule(opts.mainModule).then(function (module) {
		return opts.bootstrappedModule = module;
	});
}

function unmount(opts) {
	return new Promise(function (resolve, reject) {
		if (opts.Router) {
			var routerRef = opts.bootstrappedModule.injector.get(opts.Router);
			routerRef.dispose();
		}
		opts.bootstrappedModule.destroy();
		delete opts.bootstrappedModule;
		resolve();
	});
}

function getContainerEl(opts) {
	var element = opts.domElementGetter();
	if (!element) {
		throw new Error('domElementGetter did not return a valid dom element');
	}

	return element;
}