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
                return {
                    width: 224,
                    margin: 0
                };
            }
            if(bodyWidth / 2 < 214) {
                return {
                    width: bodyWidth / 2,
                    margin: 0
                };
            }
            var maxInRow = Math.floor(containerWidth / 224);
            return {
                width: 224,
                margin: Math.floor(((containerWidth - (maxInRow * 224)) / maxInRow)) / 2
            };
        };
        
        //adjust video thumbnail
        videoThumbnailAdjustService.adjustThumbnails = function(videos) {
            var bodyWidth = angular.element('body').width();
            var containerWidth = angular.element('.container').width();
            var adjustment = videoThumbnailAdjustService.getMargin(bodyWidth, containerWidth);
            angular.forEach(videos, function(video) {
                var item = angular.element('#' + video.id );
                if (item) {
                    item.css('width',  adjustment.width + 'px');
                    item.css('margin-left',  adjustment.margin + 'px');
                    item.css('margin-right',  adjustment.margin + 'px');
                }
            });
        };
    }
})();