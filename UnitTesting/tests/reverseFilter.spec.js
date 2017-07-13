describe('filters', function () {
    beforeEach(module('MyApp'));

    describe('reverse', function () {
        var reverse;

        beforeEach(inject(function ($filter) {
            reverse = $filter('reverse', {});
        }));

        it('Should reverse a string', function () {
            expect(reverse('raj')).toBe('jar');
        });
    });
});