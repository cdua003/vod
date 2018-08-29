describe("Unit: data validation Services", function() {
    describe("data validation Service:", function() {

        var $injector = angular.injector([ 'app.videoThumbnailAdjustService' ]);
        var service = $injector.get( 'videoThumbnailAdjustService' );
        

        it('should return 0 while body width bigger than 1000 - margin adjustment', function(){
            var result = service.getMargin(1001, 0);
            expect(result).toEqual(0);
        })

        it('should return 0 while body width bigger than 1000 - margin adjustment', function(){
            var result = service.getMargin(1001, 1000);
            expect(result).toEqual(0);
        })

        it('should return 13 while body width less equal to 1000 but container width equal to 1000 - margin adjustment', function(){
            var result = service.getMargin(0, 1000);
            expect(result).toEqual(13);
        })

        it('should return 13 while body width less equal to 1000 but container width equal to 1000 - margin adjustment', function(){
            var result = service.getMargin(1000, 1000);
            expect(result).toEqual(13);
        })

        it('should return 13 while body width less equal to 1000 but container width equal to 999 - margin adjustment', function(){
            var result = service.getMargin(0, 999);
            expect(result).toEqual(12.5);
        })

        it('should return 13 while body width less equal to 1000 but container width equal to 999 - margin adjustment', function(){
            var result = service.getMargin(1000, 999);
            expect(result).toEqual(12.5);
        })
    });
});