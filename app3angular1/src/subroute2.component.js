import angular from 'angular';

angular
    .module('app')
    .component('subroute2', {
        template: `<div style="margin-top:20px">Subroute 2 is working!</div>`,
        controllerAs: 'vm',
        controller() {
            const vm = this;

        },
    });
