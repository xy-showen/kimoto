var $ = require('jquery');

var { newsTpl } = require('home');
var { UsConfig } = require('us');
var { TeamConfig } = require('team');

function DetailConfig(ngModule) {
    UsConfig(ngModule);
    TeamConfig(ngModule);
    ngModule
        .config(($stateProvider, $urlRouterProvider) => {
            'ngInject';

            $urlRouterProvider.otherwise('/home');
            $stateProvider.state('home', {
                url: '/home',
                template: newsTpl
            }).state('us', {
                url: '/us',
                template: '<div ui-view></div>'
            }).state('team', {
                url: '/team',
                template: '<div ui-view></div>'
            });
        });
}

function MainCtrl($scope) {
    'ngInject';

    $('.first-level').hover(function() {
        $(this).addClass('active');
        $(this).find('.second-level').show();
    }, function() {
        $(this).removeClass('active');
        $(this).find('.second-level').hide();
    });
}

module.exports = { DetailConfig, MainCtrl };
