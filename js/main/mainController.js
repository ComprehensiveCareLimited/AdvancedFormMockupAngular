var mainControllers = angular.module('mainControllers', []);

mainControllers.controller('historyController', ['$scope', function($scope){
	$('.tabMenu').removeClass('active');
	$('#tabHistory').addClass('active');
}]);


mainControllers.controller('homeController', ['$scope', function($scope){
	$('.tabMenu').removeClass('active');
	$('#tabAdvancedForm').addClass('active');
}]);