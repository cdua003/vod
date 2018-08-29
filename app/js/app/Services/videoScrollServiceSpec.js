describe("Unit: data validation Services", function() {
    describe("data validation Service:", function() {

        var $injector = angular.injector([ 'app.videoScrollService' ]);
        var service = $injector.get( 'videoScrollService' );
        
        it('should return null - HorizontalScroll', function(){
            var result = service.getHorizontalScroll(0, 0, 0);
            expect(result).toEqual(null);
        })

        it('should return null - HorizontalScroll', function(){
            var result = service.getHorizontalScroll(0, 0, -1);
            expect(result).toEqual(null);
        })

        it('should return -10 - HorizontalScroll', function(){
            var result = service.getHorizontalScroll(0, -1, 0);
            expect(result).toEqual(-10);
        })

        it('should return 30 - HorizontalScroll', function(){
            var result = service.getHorizontalScroll(-1, 0, 20);
            expect(result).toEqual(30);
        })

        it('should return null - HorizontalScroll', function(){
            var result = service.getHorizontalScroll(100, 10, 20);
            expect(result).toEqual(null);
        })

        it('should return 40 - HorizontalScroll', function(){
            var result = service.getHorizontalScroll(100, 100, 30);
            expect(result).toEqual(40);
        })

    });
});