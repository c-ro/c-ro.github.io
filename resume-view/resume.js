'use strict';

angular.module('myApp.resume', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/resume', {
    templateUrl: 'resume-view/resume.html',
    controller: 'resumeCtrl'
  });
}])

.controller('resumeCtrl', ['$scope', function($scope) {
	
	$scope.resume = {
		education: "yes",
		experience: "enough",
		skills: "plenty"
	};

}]);