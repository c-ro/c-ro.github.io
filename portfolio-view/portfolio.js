'use strict';

angular.module('myApp.portfolio', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/portfolio', {
    templateUrl: 'portfolio-view/portfolio.html',
    controller: 'portfolioCtrl'
  });
}])

.controller('portfolioCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('portfolio-view/projects.json').then(function(res){
		$scope.projects = res.data;
     });
}]);