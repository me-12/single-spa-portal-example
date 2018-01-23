'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = singleSpaReact;
var defaultOpts = {
  // required opts
  React: null,
  ReactDOM: null,
  rootComponent: null,
  domElementGetter: null,
  suppressComponentDidCatchWarning: false
};

function singleSpaReact(userOpts) {
  if ((typeof userOpts === 'undefined' ? 'undefined' : _typeof(userOpts)) !== 'object') {
    throw new Error('single-spa-react requires a configuration object');
  }

  var opts = _extends({}, defaultOpts, userOpts);

  if (!opts.React) {
    throw new Error('single-spa-react must be passed opts.React');
  }

  if (!opts.ReactDOM) {
    throw new Error('single-spa-react must be passed opts.ReactDOM');
  }

  if (!opts.rootComponent) {
    throw new Error('single-spa-react must be passed opts.rootComponent');
  }

  if (!opts.domElementGetter) {
    throw new Error('single-spa-react must be passed opts.domElementGetter function');
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

function mount(opts, props) {
  return new Promise(function (resolve, reject) {
    var whenFinished = function whenFinished() {
      resolve(this);
    };
    var renderedComponent = opts.ReactDOM.render(opts.React.createElement(opts.rootComponent), getRootDomEl(opts), whenFinished);
    if (!renderedComponent.componentDidCatch && !opts.suppressComponentDidCatchWarning && atLeastReact16(opts.React)) {
      console.warn('single-spa-react: ' + (props.name || props.appName || props.childAppName) + '\'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application.');
    }
  });
}

function unmount(opts) {
  return Promise.resolve().then(function () {
    opts.ReactDOM.unmountComponentAtNode(getRootDomEl(opts));
  });
}

function getRootDomEl(opts) {
  var el = opts.domElementGetter();
  if (!el) {
    throw new Error('single-spa-react: domElementGetter function did not return a valid dom element');
  }

  return el;
}

function atLeastReact16(React) {
  if (React && typeof React.version === 'string' && React.version.indexOf('.') >= 0) {
    var majorVersionString = React.version.slice(0, React.version.indexOf('.'));
    try {
      return Number(majorVersionString) >= 16;
    } catch (err) {
      return false;
    }
  } else {
    return false;
  }
}
//# sourceMappingURL=single-spa-react.js.map