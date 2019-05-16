var demoApp = angular.module('demo');

demoApp.service('CalculatorService',['$http',function($http){


this.calculate=function(salary,partime,date,id){
	
	var dater=new Date(date);
	var days = dater.getDate();
	var month = dater.getMonth(); 
	var year = dater.getFullYear();
	var formattedDate = pad(year) + "-" + pad(month + 1) + "-" + days;
	
	console.log(formattedDate);

	
	

	var data=$http.get('http://localhost:8080/investments/pension/'+salary+'/'+partime+'/'+formattedDate+'/'+id).
        then(function(response) {

            return response.data;
        });
console.log(data)
return data;

function pad(n) {
    return n<10 ? '0'+n : n;
}


}


}])



