(function () {
    'use strict';

    angular.module('app.videoSelectService', [])
            .service('videoSelectService', videoSelectService);
            videoSelectService.$inject = [];

    function videoSelectService() {
        var videoSelectService = this;
        var _keyHander = {
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            PLAY: 13,
        };

        //Get the video above the current selected
        var getAboveVideo = function(selectedVideo, videos) {
            var selectedItem = angular.element('#' + selectedVideo.id );
            if (!selectedItem) {
                return null;
            }
            var selectedLeft = selectedItem.offset().left;
            var selectedTop = selectedItem.offset().top;
            for (var i = selectedVideo.index - 1; i >= 0; i--) {
                var nextItem = angular.element('#' + videos[i].id );
                if(!nextItem) {
                    continue;
                }
                var nextLeft = nextItem.offset().left;
                var nextTop = nextItem.offset().top;
                if(Math.abs(selectedTop - nextTop) <= 10) {
                    continue;
                }
                if(Math.abs(selectedLeft - nextLeft) >= 10) {
                    continue;
                }
                return videos[i];
            }
            return null;
        };

        //Get the video below the current selected
        var getBelowVideo = function(selectedVideo, videos) {
            var selectedItem = angular.element('#' + selectedVideo.id );
            if (!selectedItem) {
                return null;
            }
            var selectedLeft = selectedItem.offset().left;
            var selectedTop = selectedItem.offset().top;
            var belowList = [];
            for(var i = selectedVideo.index + 1, max = videos.length; i < max; i++) {
                var nextItem = angular.element('#' + videos[i].id );
                if (!nextItem) {
                    continue;
                }
                var nextLeft = nextItem.offset().left;
                var nextTop = nextItem.offset().top;
                if (Math.abs(selectedTop - nextTop) <= 10) {
                    continue;
                }
                belowList.unshift(videos[i]);
                if (Math.abs(selectedLeft - nextLeft) >= 10) {
                    continue;
                }
                return videos[i];
            }
            //To get the last video if no video below the current
            return belowList.length === 0 ? null : belowList[0];
        };

        videoSelectService.toPlay = function(keyCode) {
            return keyCode === _keyHander.PLAY;
        };

        //Find next video to select by keyboard event
        videoSelectService.selectNext = function(keyCode, selectedVideo, videos) {
            switch(keyCode) {
                //To select left video
                case _keyHander.LEFT:{
                    if (selectedVideo.index === 0) {
                        return null;
                    }
                    return videos[selectedVideo.index - 1];
                } 
                //To select above video
                case _keyHander.UP:{
                    return getAboveVideo(selectedVideo, videos);
                } 
                //To select right video
                case _keyHander.RIGHT:{
                    if (selectedVideo.index >= videos.length - 1) {
                        return null;
                    }
                    return videos[selectedVideo.index + 1];
                } 
                //To select below video
                case _keyHander.DOWN:{
                    return getBelowVideo(selectedVideo, videos);
                } 
            }
            return null;
        };
    }
})();