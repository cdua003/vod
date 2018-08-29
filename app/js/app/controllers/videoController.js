(function () {
    'use strict';

    angular.module('app.video', ['app.videoFactory', 'app.videoService', 'app.videoSelectService', 'app.videoThumbnailAdjustService', 'app.videoScrollService'])
            .controller('VideoController', VideoController);
            VideoController.$inject = ['$scope', '$log', 'videoFactory', 'videoService', 'videoSelectService', 'videoThumbnailAdjustService', 'videoScrollService'];

        function VideoController($scope, $log, videoFactory, videoService, videoSelectService, videoThumbnailAdjustService, videoScrollService) {
            var vc = this;

            //loading all the videos
            vc.init = function() {
                $log.info('loading videos');
                vc.videos = [];
                vc.selectedVideo = null;
                vc.videoMode = true;
                vc.sorting = {
                    orderBy: "index",
                    sortReverse: false
                };
                videoFactory.getVideoList().then(function(videos) {
                    if (!videos.entries || videos.entries.length === 0) {
                        return;
                    }
                    vc.videos = videoService.getVideoList(videos.entries);
                    vc.selectedVideo = vc.videos[0];
                });
            };

            //adjust video thumbnail when window size changed
            vc.resize = function() {
                videoThumbnailAdjustService.adjustThumbnails(vc.videos);
            };

            //start play video
            vc.play = function(video) {
                video.dateTime = new Date();
                angular.element('#playerModal').scope().loadVideo(video);
                $log.info('start playing - ' + video.title);
            };

            //keyboard listener
            vc.onKeyDown = function ($event) {
                if (videoSelectService.toPlay($event.keyCode)) {
                    vc.play(vc.selectedVideo);
                } else{
                    vc.selectVideo(videoSelectService.selectNext($event.keyCode, vc.selectedVideo, vc.videos));
                }
            };

            //change selected video
            vc.selectVideo = function (video) {
                if (!video || vc.selectedVideo.id === video.id) {
                    return;
                }
                var preVideoId = vc.selectedVideo.id;
                vc.selectedVideo.selected = false;
                vc.selectedVideo = video;
                vc.selectedVideo.selected = true;
                videoScrollService.scrollToPosition(preVideoId, video.id);
            };

            vc.getImage = function(video) {
                var dataImage = localStorage.getItem('#img_' + video.id);
                return !dataImage ? video.imageUrl : "data:image/png;base64," + dataImage;
            };

            vc.saveImage = function(videoId) {
                //var imgData = videoService.getBase64Image(angular.element('#img_' + videoId)[0]);
                //localStorage.setItem('#img_' + videoId, imgData);
            };

            //filter the videos to display
            vc.videoToShow = function(video) {
                return vc.videoMode || video.dateTime !== null;
            };

            //switch between home mode and history mode
            vc.switchViewMode = function() {
                vc.videoMode = !vc.videoMode;
                vc.sorting.orderBy = vc.videoMode ? "index" : "dateTime";
                vc.sorting.sortReverse = vc.videoMode ? false : true;
            }

            //adjust video thumbnail after thumnails rendered in ng-repeat
            $scope.$on('ngRepeatFinished', function() {
                vc.resize();
            });
        }
})();
