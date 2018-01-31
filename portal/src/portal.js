import * as singleSpa from '../libs/single-spa'; // waiting for this to be merged: https://github.com/CanopyTax/single-spa/pull/156
import { GlobalEventDistributor } from './globalEventDistributor'
import { loadApp } from './helper'

async function init() {
    const globalEventDistributor = new GlobalEventDistributor();

    // app1: The URL "/app1/..." is being rewritten to "http://localhost:9001/..." this is done by the webpack proxy
    await loadApp('app1', '/app1', '/app1/main.js', '/app1/store.js', globalEventDistributor);

    // app2: The URL "/app2/..." is being rewritten to "http://localhost:9002/..." this is done by the webpack proxy
    await loadApp('app2', '/app2', '/app2/main.js', '/app2/store.js', globalEventDistributor);

    // app3: The URL "/app3/..." is being rewritten to "http://localhost:9003/..." this is done by the webpack proxy
    await loadApp('app3', '/app3', '/app3/main.js', null, null); // does not have a store, so we pass null

    singleSpa.start();
}

init();

