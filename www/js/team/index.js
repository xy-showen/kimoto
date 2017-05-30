var teamBuildTpl = require('./pages/teamBuildTpl.html');

function TeamConfig(ngModule) {
    ngModule
        .config($stateProvider => {
            'ngInject';

            $stateProvider.state('team.build', {
                url: '/build',
                template: teamBuildTpl
            });
        });
}

module.exports = { TeamConfig };
