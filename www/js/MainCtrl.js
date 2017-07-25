var $ = require('jquery');

var { homeTpl } = require('home');
var { NewsConfig } = require('news');
var { UsConfig } = require('us');
var { ProductConfig } = require('product');
var { PartnerConfig } = require('partner');
var { TeamConfig } = require('team');

function DetailConfig(ngModule) {
    UsConfig(ngModule);
    NewsConfig(ngModule);
    ProductConfig(ngModule);
    PartnerConfig(ngModule);
    TeamConfig(ngModule);
    ngModule
        .config(($stateProvider, $urlRouterProvider) => {
            'ngInject';

            $urlRouterProvider.otherwise('/home');
            $stateProvider.state('home', {
                url: '/home',
                template: homeTpl
            }).state('news', {
                url: '/news',
                template: '<div ui-view></div>'
            }).state('us', {
                url: '/us',
                template: '<div ui-view></div>'
            }).state('product', {
                url: '/product',
                template: '<div ui-view></div>'
            }).state('partner', {
                url: '/partner',
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
