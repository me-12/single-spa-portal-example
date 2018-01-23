import * as singleSpa from '../libs/single-spa'; // waiting for this to be merged: https://github.com/CanopyTax/single-spa/pull/156
import { GlobalEventDistributor } from './globalEventDistributor'
import { loadApp } from './helper'

async function init() {
    const globalEventDistributor = new GlobalEventDistributor();

    // app1
    await loadApp('app1', '/app1', 'http://localhost:9001/release/main.js', 'http://localhost:9001/release/store.js', globalEventDistributor);

    // app2
    await loadApp('app2', '/app2', 'http://localhost:9002/release/main.js', 'http://localhost:9002/release/store.js', globalEventDistributor);

    // app3
    await loadApp('app3', '/app3', 'http://localhost:9003/release/main.js', null, null); // does not have a store, so we pass null

    singleSpa.start();
}

init();

