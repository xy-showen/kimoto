var chemicalListTpl = require('./pages/chemicalListTpl.html');

var pm712Tpl = require('./pages/products/PM-712Tpl.html');
var pm714Tpl = require('./pages/products/PM-714Tpl.html');
var acsa14Tpl = require('./pages/products/ACSA-14Tpl.html');
var acsa16cTpl = require('./pages/products/ACSA-16CTpl.html');
var ncsa13Tpl = require('./pages/products/NCSA-13Tpl.html');
var oa781Tpl = require('./pages/products/OA-781Tpl.html');
var na721Tpl = require('./pages/products/NA-721Tpl.html');
var na722Tpl = require('./pages/products/NA-722Tpl.html');
var ha771Tpl = require('./pages/products/HA-771Tpl.html');
var sa731Tpl = require('./pages/products/SA-731Tpl.html');
var ca752Tpl = require('./pages/products/CA-752Tpl.html');

function ProductConfig(ngModule) {
    ngModule
        .config($stateProvider => {
            'ngInject';

            $stateProvider.state('product.chemicalList', {
                url: '/chemical-list',
                template: chemicalListTpl
            }).state('product.pm712', {
                url: '/pm712',
                template: pm712Tpl
            }).state('product.pm714', {
                url: '/pm714',
                template: pm714Tpl
            }).state('product.acsa14', {
                url: '/acsa14',
                template: acsa14Tpl
            }).state('product.acsa16c', {
                url: '/acsa16c',
                template: acsa16cTpl
            }).state('product.ncsa13', {
                url: '/ncsa13',
                template: ncsa13Tpl
            }).state('product.oa7811', {
                url: '/oa781',
                template: oa781Tpl
            }).state('product.NA721', {
                url: '/na721',
                template: na721Tpl
            }).state('product.NA722', {
                url: '/na722',
                template: na722Tpl
            }).state('product.HA771', {
                url: '/ha771',
                template: ha771Tpl
            }).state('product.SA731', {
                url: '/sa731',
                template: sa731Tpl
            }).state('product.CA752', {
                url: '/ca752',
                template: ca752Tpl
            });
        });
}

module.exports = { ProductConfig };