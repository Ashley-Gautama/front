var demoApp = angular.module('demo');
demoApp.controller('PensionController',['PensionService','$scope','$rootScope',function(PensionService,$scope,$rootScope){
$scope.data=PensionService.calculatePension($rootScope.accountId).then(function(successResponse){
    $scope.pensions = successResponse.investments;
    $scope.total = successResponse.totalWorth;
console.log($scope.pensions);
},function(){
	console.log("errro")
})}])
