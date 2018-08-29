describe("Unit: data validation Services", function() {
    describe("data validation Service:", function() {

        var $injector = angular.injector([ 'app.videoThumbnailAdjustService' ]);
        var service = $injector.get( 'videoThumbnailAdjustService' );
        

        it('case 1 - margin adjustment', function(){
            var result = service.getMargin(1001, 0);
            expect(result.width).toEqual(224);
            expect(result.margin).toEqual(0);
        })

        it('case 2 - margin adjustment', function(){
            var result = service.getMargin(1001, 1000);
            expect(result.width).toEqual(224);
            expect(result.margin).toEqual(0);
        })

        it('case 3 - margin adjustment', function(){
            var result = service.getMargin(0, 1000);
            expect(result.width).toEqual(0);
            expect(result.margin).toEqual(0);
        })

        it('case 4 - margin adjustment', function(){
            var result = service.getMargin(1000, 1000);
            expect(result.width).toEqual(224);
            expect(result.margin).toEqual(13);
        })

        it('case 5 - margin adjustment', function(){
            var result = service.getMargin(0, 999);
            expect(result.width).toEqual(0);
            expect(result.margin).toEqual(0);
        })

        it('case 6 - margin adjustment', function(){
            var result = service.getMargin(1000, 999);
            expect(result.width).toEqual(224);
            expect(result.margin).toEqual(12.5);
        })

        it('case 7 - margin adjustment', function(){
            var result = service.getMargin(400, 430);
            expect(result.width).toEqual(200);
            expect(result.margin).toEqual(0);
        })
    });
});