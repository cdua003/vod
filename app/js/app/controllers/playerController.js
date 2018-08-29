(function () {
    'use strict';

    angular.module('app.video.player', [])
            .controller('playerController', playerController);
            playerController.$inject = ['$scope'];

        function playerController($scope) {
            $scope.video = null;
        
            $scope.init = function(){
                //close video when video is finished.
                angular.element('#playerModal video').bind('ended', function() {
                    angular.element('#playerModal').modal('hide');
                });
                
                //stop video after close.
                $('#playerModal').on('hidden.bs.modal', function () {
                    angular.element('#playerModal video').trigger('pause');
                });
            }
        
            $scope.loadVideo = function(video){
                $scope.video = video;
                angular.element('#playerModal video').attr('src', video.contentUrl );
                angular.element('#playerModal').modal('show');
            }
        }
})();