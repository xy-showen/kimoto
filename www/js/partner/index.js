var schoolTpl = require('./pages/schoolTpl.html');

function PartnerConfig(ngModule) {
    ngModule
        .config($stateProvider => {
            'ngInject';

            $stateProvider.state('partner.school', {
                url: '/school',
                template: schoolTpl
            });
        });
}

module.exports = { PartnerConfig };
