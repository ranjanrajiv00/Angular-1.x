angular.module('MyApp')
.directive('passwordStreangth',function(){
    return {
        restrict:'E',
        replace:true,
        template:'<h1>password is {{strength}}</h1>'
    }
})