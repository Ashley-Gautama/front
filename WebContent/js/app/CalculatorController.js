
var demoApp = angular.module('demo');
demoApp.controller('CalculatorController',['CalculatorService','$scope','$rootScope',function(CalculatorService,$scope,$rootScope){
	console.log("in controller calc")
	
	$scope.calculate=function(){
		
		CalculatorService.calculate($scope.parameters.income,$scope.parameters.workFactor,$scope.parameters.date,$rootScope.accountId).then(function(successResponse){
    $scope.totalValue = successResponse.totalValue;
},function(){
	console.log("errro")
})
	
		
	}
	
}]);