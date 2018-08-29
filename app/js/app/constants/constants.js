(function () {
    'use strict';

    angular.module('app')
            .constant('APP_AUTHOR', 'Chen Duan')
            .constant('APP_NAME', 'Media App VOD')
            .constant('APP_VERSION', '1.0.0')
            .constant('PROPERTIES', ["firstName", "lastName", "annualSalary", "super", "paymentPeriod"])
            .constant('SERVER_API', ["https://demo2697834.mockable.io"])
            .constant('VIDEO_LIST', ["/movies"]);
})();
