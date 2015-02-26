var advancedFormsApp = angular.module('advancedFormsApp', ['ngRoute', 'mainControllers']);


advancedFormsApp.config(['$routeProvider',
  function($routeProvider) {

    $routeProvider.when('/history',
      	{templateUrl: 'templates/main/history.html',
      	controller: 'historyController'}).
      otherwise({
        templateUrl: 'templates/main/home.html',
        controller: 'homeController'
      });

  }]);
