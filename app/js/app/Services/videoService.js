(function () {
    'use strict';

    angular.module('app.videoService', [])
            .service('videoService', videoService);
    videoService.$inject = [];

    function videoService() {
        var videoService = this;

        //get and create video list
        videoService.getVideoList = function(entries) {
            var list = [];
            for (var i = 0, max = entries.length; i < max; i++) {
                var entry = entries[i];
                if (!entry.contents || entry.contents.length === 0) {
                    continue;
                }
                var imageUrl = entry.images && entry.images.length > 0 ? entry.images[0].url : '';
                list.push({
                    id: entry.id,
                    index: i,
                    title: entry.title.trim(),
                    description: entry.description,
                    imageUrl: imageUrl,
                    contentUrl: entry.contents[0].url,
                    dateTime: null,
                    selected: i === 0
                })
            }
            return list;
        };

        videoService.getBase64Image = function(img) {
            var canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
        
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);
        
            var dataURL = canvas.toDataURL("image/png");
        
            return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
        }
    }
})();