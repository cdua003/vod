(function () {
    'use strict';

    angular.module('app.videoFactory', [])
            .factory('videoFactory', videoFactory);
            videoFactory.$inject = ['$http', '$log', '$q', 'SERVER_API', 'VIDEO_LIST'];

    function videoFactory($http, $log, $q, SERVER_API, VIDEO_LIST) {
        return {
            getVideoList: getVideoList
        };

        function getVideoList() {
            return $http.get(SERVER_API + VIDEO_LIST)
                    .then(getVideoListComplete)
                    .catch(getVideoListFailed);

            //return the video data while success
            function getVideoListComplete(response) {
                return response.data;
            }

            //error handle while loading video data failed
            function getVideoListFailed(e) {
                var newMessage = 'Failed for get video list.';
                $log.error(newMessage);
                return $q.reject(e);
            }
        }
    }
})();
