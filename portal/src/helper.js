import * as singleSpa from '../libs/single-spa'; // waiting for this to be merged: https://github.com/CanopyTax/single-spa/pull/156

export function hashPrefix(prefix) {
    return function (location) {
        return location.hash.startsWith(`#${prefix}`);
    }
}

export async function loadApp(name, hash, appURL, storeURL, globalEventDistributor) {
    // import the store module
    const storeModule = storeURL ? await SystemJS.import(storeURL) : {storeInstance: null};

    // register the store with the globalEventDistributor
    if (storeModule.storeInstance && globalEventDistributor)
        globalEventDistributor.registerStore(storeModule.storeInstance);

    // register the app with singleSPA and pass a reference to the store of the app as well as a reference to the globalEventDistributor
    const customProps = { store: storeModule.storeInstance, globalEventDistributor: globalEventDistributor };
    singleSpa.registerApplication(name, () => SystemJS.import(appURL), hashPrefix(hash), customProps);
}