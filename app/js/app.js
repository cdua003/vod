(function () {
    'use strict';

    angular.module('app', [
        'ui.router',
        'app.video',
        'app.video.player',
        'app.directives.about',
        'app.directives.containerFocus',
        'app.directives.onSizeChanged',
        'app.directives.onFinishRender',
        'app.directives.imageLoad',
    ]);
})();
