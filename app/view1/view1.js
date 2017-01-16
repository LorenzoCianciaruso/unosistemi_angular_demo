'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http', 'earthquakes', function($scope, $http, earthquakes) {
  earthquakes.get().then(function(response){
    $scope.earthquakes_location = response.data.results;
  });

  
}]);
