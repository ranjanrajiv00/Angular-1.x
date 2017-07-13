angular.module('MyApp')
    .filter('reverse', [function () {
        return function (value) {
            return value.split('').reverse().join('');
        }
    }])