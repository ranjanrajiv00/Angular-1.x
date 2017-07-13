angular.module('MyApp')
    .factory('githubService', ['$http', function ($http) {
        var get = function () {
            return $http.get('https://api.github.com/users/angular/repos');
        }
        return {
            get: get
        };
    }]);