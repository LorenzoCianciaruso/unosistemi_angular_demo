'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$interval', 'validator', function($scope, $interval, validator) {

  $scope.validation = function(){
    $scope.message = null;
    var res = validator.validate($scope.user);

    if(res){
      $scope.message = 'All good';
    }else{
      $scope.message = 'Validation error';
    }
  }

  var reset = function(){
    console.log('resetting');
    $scope.user = {};
  }

  $interval(reset, 30000);

}]);
