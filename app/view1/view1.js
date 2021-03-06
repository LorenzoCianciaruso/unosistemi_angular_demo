'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http', 'earthquakes',
function($scope, $http, earthquakes) {

  earthquakes.get().then(function(response){
    $scope.markers = [];
    $scope.earthquakes_location = response.data.results;

    var mapOptions = {
      zoom: 6,
      center: new google.maps.LatLng($scope.earthquakes_location[0].latitude, $scope.earthquakes_location[0].longitude),
      mapTypeId: google.maps.MapTypeId.TERRAIN
    }

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    for (var i = 0; i < $scope.earthquakes_location.length; i++){
      $scope.markers.push(createMarker($scope.earthquakes_location[i]));
    }

  });

  var createMarker = function (info){
    var marker = new google.maps.Marker({
      map: $scope.map,
      position: new google.maps.LatLng(info.latitude, info.longitude),
      title: info.humanReadableLocation,
      size: info.size,
      depth: info.depth,
      timestamp: info.timestamp,
      humanReadableLocation: info.humanReadableLocation
    });

    var infoWindow = new google.maps.InfoWindow();

    marker.content = '<div class="infoWindowContent"></div>';

    google.maps.event.addListener(marker, 'click', function(){
      infoWindow.setContent('<h2>Size: ' + marker.size + '</h2>' + marker.timestamp);
      infoWindow.open($scope.map, marker);
    });

    return marker;
  }

  $scope.openInfoWindow = function(e, selectedMarker){
    e.preventDefault();
    google.maps.event.trigger(selectedMarker, 'click');
  }

}]);
