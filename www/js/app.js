require('jquery');
var _ = require('lodash');
var { DetailConfig, MainCtrl } = require('./MainCtrl');
var ngModule = angular
    .module('kimoto', [
        'ui.router',
        'ui.bootstrap'
    ])
    .controller({
        MainCtrl
    })
    .config(($locationProvider, $stateProvider) => {
        'ngInject';

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }).run(function() {
        'ngInject';
    });

DetailConfig(ngModule);