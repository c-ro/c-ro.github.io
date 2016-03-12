angular.module('myApp.resume').directive('section', [function(){

	var pageFunc = function(){

	};

	// var directive = {
	// 	restrict: 'AE',
	// 	scope: "=resume",
	// 	templateUrl: 'section.html',
	// 	link: pageFunc
	// };

	var directive = {
		restrict: 'AE',
		template: "<div>RESUME</div>",
		controller: 'resumeCtrl'
	};


	return directive;

}]);