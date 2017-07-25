var newsListTpl = require('./pages/newsListTpl.html');
var news1DetailTpl = require('./pages/news1DetailTpl.html');
var news2DetailTpl = require('./pages/news2DetailTpl.html');
var news3DetailTpl = require('./pages/news3DetailTpl.html');
var news4DetailTpl = require('./pages/news4DetailTpl.html');

function NewsConfig(ngModule) {
    ngModule
        .config($stateProvider => {
            'ngInject';

            $stateProvider.state('news.list', {
                url: '/list',
                template: newsListTpl
            }).state('news.detail1', {
                url: '/detail1',
                template: news1DetailTpl
            }).state('news.detail2', {
                url: '/detail2',
                template: news2DetailTpl
            })
            .state('news.detail3', {
                url: '/detail3',
                template: news3DetailTpl
            })
            .state('news.detail4', {
                url: '/detail4',
                template: news4DetailTpl
            });
        });
}

module.exports = { NewsConfig };
