describe('github', function () {
    beforeEach(module('MyApp'));

    var githubService, $httpBackend;

    beforeEach(inject(function (_githubService_, _$httpBackend_) {
        githubService = _githubService_;
        $httpBackend = _$httpBackend_;

        $httpBackend.when('GET', 'https://api.github.com/users/angular/repos').respond([{ userId: 1, userName: 'Rajiv' }, { userId: 2, userName: 'Rajiv Ranjan' }]);
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('get user data', function () {
        githubService.get()
            .then(function (response) {
                expect(response.data.length).toEqual(2);
            });

        $httpBackend.flush();
    });
});