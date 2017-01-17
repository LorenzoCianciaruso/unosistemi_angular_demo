'use strict';

angular.module('myApp.validation', [])
.factory('validator', [function() {
  return {
    validate: function(user){
      var _regName = /[a-zA-Z]{2,20}/;
      var _regSurname = /[a-zA-Z]{2,20}/;

      if(!user || !user.name || !user.surname || !user.year || isNaN(user.year)){
        return false;
      }

      if(_regName.test(user.name) &&
      _regSurname.test(user.surname) &&
      user.year >= 1950 &&
      user.year < 2017){
        return true;
      }

      return false;
    }
  };
}]);
