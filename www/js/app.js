ons.bootstrap('myApp'); // Optionally loading ngAnimate module
 var anModule = angular.module('myApp');
  
  anModule.controller("PageController", function($scope){
	console.log('Hello');
  });