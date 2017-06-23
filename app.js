var app=angular.module('Declutter', []); 
//Modules act as logical containers for components in Angular //applications. 
//"root" is the name of the module. The empty array [] is for //dependency injection.

app.controller('MainCtrl', ['$scope',function($scope){
		$scope.test = 'Hello world!';
		$scope.myData={}
		$scope.names=["A","B","C","D"];
		$scope.myData.doClick=function(event) {
			console.log("x");
		}
	
	}]); 
//the function passed is the controller func, used to augment the scope
//the elements of the array before the controller function are the dependencies. $scope= an objz