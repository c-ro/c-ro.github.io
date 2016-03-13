'use strict';

angular.module('myApp.resume', ['ngRoute', 'ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/resume', {
    templateUrl: 'resume-view/resume.html',
    controller: 'resumeCtrl'
  });
}])

.controller('resumeCtrl', ['$scope', function($scope) {

	$scope.isCollapsed = true;
	
	$scope.resume = {
		education: ["yes", "a few years ago though", "mostly I'm a student of life"],
		experience: ["enough", "well, enough to know I'm professional", "I am trying to change careers now so these might not be terribly relevant"],
		skills: ["plenty", "I'm getting pretty good at coding", "and I'm an expert in several Adobe CC products", "I also enjoy cooking and seem to have an aptitude for it."]
	};

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