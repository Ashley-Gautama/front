'use strict'

var module = angular.module('demo');
module.controller("UserController", [ "$rootScope", "UserService",
		function($rootScope, UserService) {
console.log("retrieving")
			
			UserService.getUserById(3).then(function(value) {
				console.log(value.account.bankNumber);
				$rootScope.accountId= value.account.bankNumber;
			}, function(reason) {
				console.log("error occured");
			}, function(value) {
				console.log("no callback");
			});


}]);