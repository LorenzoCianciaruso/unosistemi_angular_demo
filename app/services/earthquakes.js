'use strict';

angular.module('myApp.earthquakes', [])

.factory('earthquakes', ['$http', function($http) {
  return {
    get: function(){
      return $http.get('http://apis.is/earthquake/is');
    }
  };
}]);
