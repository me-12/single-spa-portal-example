import Vue from 'vue'
import singleSpaVue from 'single-spa-vue';
import App from './App.vue'

Vue.config.productionTip = false

const vueLifecycles = singleSpaVue({
    Vue,
    appOptions: {
        el: domElementGetter(),
        render: h => h(App)
    }
});

export const bootstrap = [
    vueLifecycles.bootstrap,
];

export const mount = [
    vueLifecycles.mount,
];

export const unmount = [
    vueLifecycles.unmount,
];

function domElementGetter() {
    // Make sure there is a div for us to render into
    let el = document.getElementById('app4');

    if (!el) {
        el = document.createElement('div');
        el.id = 'app4';
        document.body.appendChild(el);
    }
    return '#app4';
}
