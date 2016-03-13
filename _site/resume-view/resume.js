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

.directive('resumeSection', [function(){

	var pageFunc = function(){

	// $('.resume-section').each(function(){
		
	//     var content = $(this).find('.section-content');
	//    	var header = $(this).find('.section-header');

	//     header.click(function(){
	// 	    $(this).toggleClass('open');
	// 	    content.slideToggle();
	// 	});
	// });
	};

	var directive = {
		controller: 'resumeCtrl',
		restrict: 'AEC',
		// template: "<span>works.</span>"
		templateUrl: "/resume-view/resume-section.html",
		link: pageFunc
	};

	return directive;

}]);