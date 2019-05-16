'use strict'

angular.module('demo').service('UserService',
		[ "$http", function($http) {
			
			this.getUserById=function(){
			  var data="";
				var data=$http.get('http://localhost:8080/').
			        then(function(response) {

			            return response.data;
			        });
			console.log(data)
			return data;
			}
		}]);