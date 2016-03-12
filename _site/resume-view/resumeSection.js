angular.module('myApp.resume').directive('resumeSection', [function(){

	var pageFunc = function(){

	};

	// var directive = {
	// 	restrict: 'AE',
	// 	scope: "=resume",
	// 	templateUrl: 'section.html',
	// 	link: pageFunc
	// };

	var directive = {
		controller: 'resumeCtrl',
		restrict: 'AE',
		template: "<div>RESUME</div>"
	};

	console.log("return directive");
	return directive;

}]);