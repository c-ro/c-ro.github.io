'use strict';

angular.module('myApp.resume', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/resume', {
    templateUrl: 'resume-view/resume.html',
    controller: 'resumeCtrl'
  });
}])

.controller('resumeCtrl', ['$scope', '$http', function($scope, $http) {

	$scope.isCollapsed = true;
	
	$http.get('resume-view/resume.json').then(function(res){
		$scope.resume = res.data;
     });

}])

.filter("isArray", function() {
        return function(input) {
            return angular.isArray(input);
        };
})

.filter("isString", function() {
        return function(input) {
            return angular.isString(input);
        };
});