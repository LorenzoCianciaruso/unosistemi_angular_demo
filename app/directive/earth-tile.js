'use strict';

angular.module("myApp.earthTile", [])
.directive("tile", function() {
    return {
        restrict : 'E',
        templateUrl : 'directive/templates/earth-tile.html',
        scope: {
          earthquake: '=earthquakeData'
        }
    };
});
