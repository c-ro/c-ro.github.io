var app = angular.module('grocer', []);

app.factory('items', [function(){
	var list = {
		items: [
			{ name: 'cat food', price: 0, qty: 0, units: 'lbs', category: "pets"},
			{ name: 'grapeseed oil', price: 0, qty: 0, units: 'ct', category: "dryandcanned"},
			{ name: 'honey', price: 0, qty: 0, units: 'lbs', category: "dryandcanned"},
			{ name: 'miso', price: 0, qty: 0, units: 'ct', category: "dryandcanned"},
			{ name: 'millet', price: 0, qty: 0, units: 'ct', category: "dryandcanned"},
			{ name: 'nivea', price: 0, qty: 0, units: 'ct', category: "personal"},
			{ name: 'red cooking wine', price: 0, qty: 0, units: '', category: "dryandcanned"},
			{ name: 'fish', price: 0, qty: 0, units: 'lbs', category: "meat"},
			{ name: 'cottage cheese', price: 0, qty: 0, units: 'ct', category: "dairy"},
			{ name: 'lentils', price: 1.69, qty: 2, units: 'lbs', category: "dryandcanned"},
			{ name: 'sliced cheese', price: 7.99, qty: 0, units: 'lbs', category: "dairy"},
			{ name: 'pumpernickel', price: 0, qty: 0, units: 'ct', category: "bakery"},
			{ name: 'hairspray', price: 0, qty: 0, units: 'ct', category: "personal"},
			{ name: 'peppers', price: 1, qty: 0, units: 'ct', category: "produce"},
			{ name: 'tomatoes', price: 0, qty: 0, units: 't', category: "produce"},
			{ name: 'mushrooms', price: 0, qty: 0, units: 't', category: "produce"},
			{ name: 'onions', price: 2.19, qty: 0, units: 'ct', category: "produce"},
			{ name: 'limes', price: 0.44, qty: 0, units: 'ct', category: "produce"},
			{ name: 'beer', price: 9.99, qty: 0, units: 'ct', category: "beverages"},
			{ name: 'shrimp', price: 15.98, qty: 1, units: 'lbs', category: "meat"}
		]
	};

	return list;

}]);

app.controller('MainCtrl', [
	'$scope',
	'items',

	function($scope, items){

		$scope.title= 'Carl\'s List';

		$scope.itemlist = items.items;

		$scope.budget = 0;

		$scope.hiddenItems = [];

		$scope.categories = ["Beverages", "Bakery", "Dairy", "Dry and Canned","Frozen", "meat", "Produce", "Household", "Personal" ,"Other", "Pets"];

		$scope.elementclass = [];

		$scope.addClass = function(className) {
			$scope.elementClass.push(className);
		};

		$scope.removeClass = function(className) {
			$scope.elementClass.pop(className);
		};

		$scope.addToList = function(){
			if(!$scope.name || $scope.name === ''){ return; }

			if(!$scope.price){ $scope.price = 0; }

			$scope.itemlist.push({ name: $scope.name, price: $scope.price, qty: $scope.qty, units: $scope.units} );

			$scope.qty = '';
			$scope.name = '';
			$scope.price = '';
			$scope.units = '';

			scrollToBottom();
		};

		$scope.updateValue = function(item, value) {
			var newValue = prompt(value + ": ") || item[value];
			item[value] = newValue;
		};

		$scope.listTotal = function(){
			var list = $scope.itemlist;
			var sum = sum || 0;

			for(var i = 0; i < list.length; i++){
				sum = sum + (list[i].price * list[i].qty);
			}

			return sum;
		};

		$scope.hideItem = function(item){
			var toHide = $scope.itemlist.splice($scope.itemlist.indexOf(item), 1);
			$scope.hiddenItems.push(toHide);
		};

		$scope.viewHidden = function(){
			var items = $scope.hiddenItems;
			for(var i = 0; i < items.length; i++){
				console.log(items[i]);
			}
		};

		$scope.crossout = function(item){
			if(item.crossout){
				item.crossout = false;
			} else if (!item.crossout && !checkInput(item.price)){
				$scope.updateValue(item, 'price');

				if (!item.crossout && !checkInput(item.qty)){
					$scope.updateValue(item, 'qty');
				}

				item.crossout = true;
			} else {
				item.crossout = true;
			}
		};

//////UTILITY FUNCTIONS
		function checkInput(input){
			if (input > 0){
				return true;
			} else {
				return false;
			}
		}

		function scrollToBottom(){
			window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
		}
	}
]);


		  // { name: 'broccoli', price: 0, qty: 0, units: 'ct', category: "produce"},
  		//   { name: 'lentils', price: 0, qty: 0, units: 'ct', category: "dryandcanned"},
		  // { name: 'beef', price: 0, qty: 0, units: 'lb', category:"meat"},
		  // { name: 'bread', price: 0, qty: 0, units: 'ct', category:"bakery"}, 
		  // { name: 'sauce', price: 0, qty: 0, units: 'oz', category: "dryandcanned"},
		  // { name: 'cheese', price: 0, qty: 0, units: 'lb', category: "dairy"},
		  // { name: 'chives', price: 0, qty: 0, units: 'ct', category: "produce"},
  		//   { name: 'sardines', price: 0, qty: 0, units: 'ct', category: "dryandcanned"},
		  // { name: 'red snapper', price: 0, qty: 0, units: 'lb', category: "meat"},
		  // { name: 'donuts', price: 0, qty: 0, units: 'ct', category: "bakery"}, 
		  // { name: 'rice', price: 0, qty: 0, units: '', category: "dryandcanned"},
		  // { name: 'yogurt', price: 0, qty: 0, units: '', category: "dairy"},