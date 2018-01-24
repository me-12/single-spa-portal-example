import * as singleSpa from '../libs/single-spa'; // waiting for this to be merged: https://github.com/CanopyTax/single-spa/pull/156
import { GlobalEventDistributor } from './globalEventDistributor'
import { loadApp } from './helper'

async function init() {
    const globalEventDistributor = new GlobalEventDistributor();

    // app1
    await loadApp('app1', '/app1', '/app1/main.js', '/app1/store.js', globalEventDistributor);

    // app2
    await loadApp('app2', '/app2', '/app2/main.js', '/app2/store.js', globalEventDistributor);

    // app3
    await loadApp('app3', '/app3', '/app3/main.js', null, null); // does not have a store, so we pass null

    singleSpa.start();
}

init();

