angular.directive('list', [function(){
	
	var someFunc = function(scope, element, attrs){
		// var crossout = angular.element(element.children()[0]);
		// var row = angular.element(element.children());
		// var itemName = angular.element(element.children()[1]);
		// var itemSubtotal = angular.element(element.children()[2]);
		// var itemActions = angular.element(element.children()[3]);
		// var content = [itemName, itemSubtotal, itemActions];

		// var strikeOut = function(){
		// 	itemName.toggleClass('strikeout');
		// 	for(var i = 1; i < content.length; i++){
		// 		content[i].toggleClass('strikeout');
		// 	}
		// 	//add to cart
		// 	scope.toggleCart(scope.item);

		// };
		console.log(scope);
		// $(crossout).on('click', strikeOut);
	};

	var directive = {
		restrict: 'EA',
		scope: "=resume",
		templateUrl: 'sectionDirective/sectionDirective.html'
		// ,
		// link: listFunc
	};

	return directive;

}]);