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

}])

.directive('resumeSection', [function(){

	var pageFunc = function(){
	$('.resume-section').each(function(){

	    var content = $(this).find('.section-content');
	   	var header = $(this).find('.section-header');

	    header.click(function(){
	    	console.log("works?");
		    $(this).toggleClass('open');
		    content.slideToggle();
		}); 

	});
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