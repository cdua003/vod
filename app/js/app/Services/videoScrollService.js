(function () {
    'use strict';

    angular.module('app.videoScrollService', [])
            .service('videoScrollService', videoScrollService);
            videoScrollService.$inject = [];
    function videoScrollService() {
        var videoScrollService = this;

        var horizontalScrollPosition = 0;

        //Horizontal scroll to the current position
        var horizontalScroll = function(curVideo) {
            var width = videoScrollService.getHorizontalScroll(angular.element('body').width(), curVideo.offset().left, curVideo.width());
            if(!width) {
                return;
            }
            horizontalScrollPosition += width;
            angular.element('.container').animate({
                scrollLeft: horizontalScrollPosition
            }, 200);
        };

        //Vertical scroll to the current position
        var verticalScroll = function(curVideo, preTop, curTop) {
            if(preTop < curTop) {
                curVideo[0].scrollIntoView(false);
            } else {
                curVideo[0].scrollIntoView(true);
            }
        };

        //get horizontal scroll pixel
        videoScrollService.getHorizontalScroll = function(bodyWidth, left, width) {
            if(left < 0) {
                return (width + 10) * -1;
            }
            if (left + width > bodyWidth) {
                return width + 10;
            }
            return null;
        };

        //Scroll to the position of new selected video
        videoScrollService.scrollToPosition = function(preItemId, curItemId) {
            var preVideo = angular.element('#' + preItemId);
            var curVideo = angular.element('#' + curItemId);
            if (!preVideo || !curVideo) {
                return;
            }
            var preTop =  preVideo.offset().top;
            var curTop =  curVideo.offset().top;
            if (Math.abs(preTop - curTop) <= 10) {
                horizontalScroll(curVideo);
            } else { 
                verticalScroll(curVideo, preTop, curTop);
            }
        };
    }
})();