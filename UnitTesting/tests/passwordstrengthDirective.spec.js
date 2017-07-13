describe('password strength', function () {
    var $compile, $rootScope;

    beforeEach(module('MyApp'));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('match password streangth html', function () {
        var $scope = $rootScope.$new();
        $scope.strength = 'strong';
        var element = $compile("<password-streangth></password-streangth>")($scope);
        $scope.$digest();

        expect(element.html()).toContain('password is strong');
    });
});