import angular from 'angular';

angular
    .module('app')
    .component('root', {
        template: `
            <div style="margin-top: 100px;">
              This was rendered by App3 which is written in Angular 1.6
            </div>
            
            <a href="#/app3/subroute1">Subroute 1</a>
            <a href="#/app3/subroute2">Subroute 2</a>
            
            <ui-view />
        `,
        controllerAs: 'vm',
        controller($timeout) {
            const vm = this;
        }
    });
