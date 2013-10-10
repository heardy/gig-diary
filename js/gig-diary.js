var myApp = angular.module('myApp', []);

myApp.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
	console.log("dsf");
	$scope.yourName = 'Angular';

	$http.get('./data/concerts.json')
	.success(function(a){
		console.log("success");
		console.log(a);
		$scope.concerts = a;
	});
}]);