var app = angular.module('grocer', []);

app.factory('items', [function(){
	var list = {
		items: [
		  { name: 'honey', price: 0, qty: 0, units: 'lbs', category: "dryandcanned"},
		  { name: 'miso', price: 0, qty: 0, units: '', category: "dryandcanned"},
		  { name: 'millet', price: 0, qty: 0, units: '', category: "dryandcanned"},
		  { name: 'thyme', price: 0, qty: 0, units: '', category: "spices"},
		  { name: 'rice vinegar', price: 0, qty: 0, units: '', category: "dryandcanned"},
		  { name: 'fish', price: 0, qty: 0, units: '', category: "meat"},
		  { name: 'paper towels', price: 0, qty: 0, units: '', category: "household"},
		  { name: 'lentils', price: 1.69, qty: 2, units: 'lbs', category: "dryandcanned"},
		  { name: 'lysol toilet cleaner', price: 0, qty: 0, units: '', category: "household"},
		  { name: 'spray oil', price: 0, qty: 0, units: '', category: "dryandcanned"},
		  { name: 'scrubber sponges', price: 0, qty: 0, units: '', category: "household"},
		  { name: 'frozen peas', price: 0, qty: 0, units: '', category: "frozen"},
		  { name: 'mukimame', price: 0, qty: 0, units: '', category: "frozen"},
		  { name: 'carrots', price: 0, qty: 0, units: '', category: "produce"},
		  { name: 'red onion', price: 2.19, qty: 1, units: 'ct', category: "produce"},
		  { name: 'sanbal oelek', price: 0, qty: 0, units: '', category: "dryandcanned"},
		  { name: 'half and half', price: 1.29, qty: 1, units: 'ct', category: "dairy"},
		  { name: 'bathroom cleaner', price: 0, qty: 0, units: '', category: "household"},
  		  { name: 'hairspray', price: 0, qty: 0, units: '', category: "personal"},
		  { name: 'razor handle', price: 0, qty: 0, units: '', category: "personal"},
  		  { name: 'cilantro', price: 0.99, qty: 0, units: 'ct', category: "produce"},
		  { name: 'shrimp', price: 11.98, qty: 2, units: 'lbs', category: "meat"},
  		  { name: 'peppers', price: 1, qty: 4, units: '', category: "produce"},
		  { name: 'corn starch', price: 0, qty: 0, units: '', category: "dryandcanned"},
  		  { name: 'cous cous', price: 0, qty: 0, units: '', category: "dryandcanned"},
		  { name: 'mozzarella', price: 0, qty: 0, units: '', category: "dairy"},
  		  { name: 'capers', price: 0, qty: 0, units: '', category: "dryandcanned"},
  		  { name: 'chicken', price: 2.49, qty: 2.1, units: 'lbs', category: "meat"}
		]
	};

	return list;

}])

app.controller('MainCtrl', [
	'$scope',
	'items',

	function($scope, items){

		$scope.title= 'Carl\'s List';

		$scope.itemlist = items.items;

		$scope.budget = 0;

		$scope.hiddenItems = [];

		$scope.categories = ["Beverages", "Bakery", "Dairy", "Dry and Canned","Frozen", "meat", "Produce", "Household", "Personal" ,"Other"];

		$scope.elementclass = [];

		$scope.addClass = function(className) {
		  $scope.elementClass.push(className);
		}

		$scope.removeClass = function(className) {s
		  $scope.elementClass.pop(className);
		}

		$scope.addToList = function(){
			if(!$scope.name || $scope.name === ''){ return; }

			if(!$scope.price){ $scope.price = 0 };

			$scope.itemlist.push({ name: $scope.name, price: $scope.price, qty: $scope.qty, units: $scope.units} );

			$scope.qty = '';
			$scope.name = '';
			$scope.price = '';
			$scope.units = '';

			scrollToBottom();
		};

		$scope.updateQty = function(item, qty){
			var newqty = prompt("qty: ");
			item.qty = newqty;
		}

		$scope.updatePrice= function(item, price){
			var newPrice= prompt("price: ");
			item.price = newPrice;
		}


		$scope.updateName = function(item, name){
			var newName = prompt("name: ");
			item.name = newName;
		}

		$scope.updateUnits = function(item, units){
			var newunits = prompt("units: ");
			item.units = newunits;
		}

		$scope.updateBudget = function(){
			var newbudget = prompt("budget: ");
			$scope.budget = newbudget;
		}

		$scope.listTotal = function(){
			var list = $scope.itemlist;
			var sum = sum || 0;

			for(var i = 0; i < list.length; i++){
				sum = sum + (list[i].price * list[i].qty);
			};

			return sum;
		}

		$scope.hideItem = function(item){
			var toHide = $scope.itemlist.splice($scope.itemlist.indexOf(item), 1);
			$scope.hiddenItems.push(toHide);
		};

		$scope.viewHidden = function(){
			var items = $scope.hiddenItems;
			for(var i = 0; i < items.length; i++){
				console.log(items[i]);
			}
		}

		$scope.crossout = function(item){
			if(item.crossout){
				item.crossout = false;
			} else if (!item.crossout && !checkInput(item.price)){
				$scope.updatePrice(item);

				if (!item.crossout && !checkInput(item.qty)){
					$scope.updateQty(item);
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