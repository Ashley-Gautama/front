var demoApp = angular.module('demo');

demoApp.service('PensionService',['$http',function($http){

this.calculatePension=function(accountId){
	var data=$http.get('http://localhost:8080/investments/'+accountId).
        then(function(response) {
          
            return response.data;
        });
console.log(data)
return data;   


}


}])
