import angular from 'angular';

angular
    .module('app')
    .component('subroute1', {
        template: `<div style="margin-top:20px">Subroute 1 is working!</div>`,
        controllerAs: 'vm',
        controller() {
            const vm = this;

        },
    });
