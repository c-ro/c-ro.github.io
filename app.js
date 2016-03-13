// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'myApp.resume',
  'myApp.contact',
  'myApp.portfolio',
  'myApp.version',
  'ui.bootstrap',
  'ngAnimate'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/portfolio'});
}]);