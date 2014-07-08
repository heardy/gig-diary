var myApp = angular.module('myApp', []);

myApp.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
	// console.log("dsf");
	// $scope.name = 'Angular';

	$http.get('./data/concerts.json')
	.success(function(concerts){
		// console.log("success");
		// console.log(concerts);
		$scope.concerts = concerts;
	});
}]);