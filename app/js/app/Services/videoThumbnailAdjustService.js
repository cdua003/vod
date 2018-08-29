(function () {
    'use strict';

    angular.module('app.videoThumbnailAdjustService', [])
            .service('videoThumbnailAdjustService', videoThumbnailAdjustService);
            videoThumbnailAdjustService.$inject = [];

    function videoThumbnailAdjustService() {
        var videoThumbnailAdjustService = this;

        //To get margin for adjustment
        videoThumbnailAdjustService.getMargin = function(bodyWidth, containerWidth) {
            if(bodyWidth > 1000) {
                return 0;
            }
            var maxInRow = Math.floor(containerWidth / 224);
            return Math.floor(((containerWidth - (maxInRow * 224)) / maxInRow)) / 2;
        };
        
        //adjust video thumbnail
        videoThumbnailAdjustService.adjustThumbnails = function(videos) {
            var bodyWidth = angular.element('body').width();
            var containerWidth = angular.element('.container').width();
            var margin = videoThumbnailAdjustService.getMargin(bodyWidth, containerWidth);
            angular.forEach(videos, function(video) {
                var item = angular.element('#' + video.id );
                if (item) {
                    item.css('margin-left',  margin + 'px');
                    item.css('margin-right',  margin + 'px');
                }
            });
        };
    }
})();