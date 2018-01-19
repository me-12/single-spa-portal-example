import angular from 'angular';
import './root.component.js';
import './subroute1.component.js';
import './subroute2.component.js';

angular
    .module('app')
    .config(($stateProvider, $locationProvider) => {

        // make sure angular does not rewrite our urls, since they are set by the portal
        $locationProvider.hashPrefix('');
        $locationProvider.html5Mode({
            enabled: false,
            requireBase: false,
        });


        $stateProvider
            .state('root', {
                url: '/app3',
                template: '<root />',
            })

            .state('root.subroute1', {
                url: '/subroute1',
                template: '<subroute1 />',
            })

            .state('root.subroute2', {
                url: '/subroute2',
                template: '<subroute2 />',
            })

    });
