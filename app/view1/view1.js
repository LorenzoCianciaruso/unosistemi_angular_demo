'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http', 'earthquakes', '$sce',
function($scope, $http, earthquakes, $sce) {
  earthquakes.get().then(function(response){
    $scope.earthquakes_location = response.data.results;
  });

  var baseURL = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyCuFfrSGEpLcNpNJo9PU4_ehsIULYmvZQc&q=Iceland';

  $scope.center = $sce.trustAsResourceUrl(baseURL);

  $scope.select = function(index){
    var URL = baseURL +
    $scope.earthquakes_location[index].latitude+','+
    $scope.earthquakes_location[index].longitude;

    $scope.center = $sce.trustAsResourceUrl(URL);
  };
}]);
