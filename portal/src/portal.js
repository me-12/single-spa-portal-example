import * as singleSpa from 'single-spa';


singleSpa.declareChildApplication('app1', () =>  SystemJS.import('http://localhost:9001/release/main.js'), hashPrefix('/app1'));
singleSpa.declareChildApplication('app2', () =>  SystemJS.import('http://localhost:9002/release/main.js'), hashPrefix('/app2'));
singleSpa.declareChildApplication('app3', () =>  SystemJS.import('http://localhost:9003/release/main.js'), hashPrefix('/app3'));

singleSpa.start();


function hashPrefix(prefix) {
    return function(location) {
        return location.hash.startsWith(`#${prefix}`);
    }
}