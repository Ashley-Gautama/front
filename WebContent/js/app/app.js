'use strict'

var demoApp = angular.module('demo', ['ngRoute']);
demoApp.config(['$routeProvider',function($routeProvider){
  $routeProvider
  .when('/',{
	    controller:'UserController',
    templateUrl:'pages/home.html'
  })
  .when('/assets',{
    controller:'PensionController',
    templateUrl:'pages/assets.html'
  })
.when('/calculator',{
controller:"CalculatorController",
  templateUrl:'pages/calculator.html'
})
}])
