var briefTpl = require('./pages/briefTpl.html');
var chairmanMessageTpl = require('./pages/chairmanMessageTpl.html');
var historyTpl = require('./pages/historyTpl.html');

function UsConfig(ngModule) {
    ngModule
        .config($stateProvider => {
            'ngInject';

            $stateProvider.state('us.brief', {
                url: '/brief',
                template: briefTpl
            }).state('us.chairman', {
                url: '/chairman',
                template: chairmanMessageTpl
            }).state('us.history', {
                url: '/history',
                template: historyTpl
            });
        });
}

module.exports = { UsConfig };
