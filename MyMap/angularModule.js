angular.module('testTask', []).controller("testTaskCtrl", ['$scope', function ($scope) {
    $scope.tree = model;
    $scope.selectedMarkersList = [];
    $scope.markersOnTheMap = [];

    $scope.setMarkersOnMap = function (markersArr) {
        console.log("setMarkersOnTheMap");
        _.forEach(markersArr, function (marker) {
            let coordinates = marker.coordinates;
            let id = marker.id;
            let markerToAdd = L.marker([coordinates.x, coordinates.y]);
            markerToAdd.on('mouseover', function () {
                let isDuplicates;
                _.forEach($scope.selectedMarkersList, function (selectedMarker) {
                    if (selectedMarker.id === id) isDuplicates = true;
                });
                if (!isDuplicates) {
                    $scope.selectedMarkersList.push(marker);
                    $scope.$apply();
                }
            });
            $scope.markersOnTheMap.push({id: id, marker: markerToAdd.addTo(mymap)});
        });
    };

    $scope.deleteItem = function (item) {
        console.log("deleteItem");
        _.forEach($scope.selectedMarkersList, function (selectedMarker, i) {
            if (selectedMarker.id === item.id) {
                $scope.selectedMarkersList.splice(i, 1);
            }
        })
    };

    $scope.levelSelected = function (obj) {
        console.log("levelSelected");
        let arrayOfMarkers = [];
        if (!obj.clicked) {
            obj.clicked = true;
            arrayOfMarkers = $scope.makerArrayOfMarkers(obj);
            $scope.setMarkersOnMap(arrayOfMarkers);
        }
        else {
            obj.clicked = false;
            arrayOfMarkers = $scope.makerArrayOfMarkers(obj);
            $scope.removeMarkers(arrayOfMarkers)
        }
    };

    $scope.removeMarkers = function (markersArr) {
        console.log("removeMarkers");
        for (let i = 0; i < $scope.markersOnTheMap.length; i++) {
            for (let j = 0; j < markersArr.length; j++) {
                if ($scope.markersOnTheMap[i].id === markersArr[j].id) {
                    $scope.markersOnTheMap[i].marker.remove();
                    $scope.markersOnTheMap.splice(i, 1);
                }
            }
        }
    };

    $scope.makerArrayOfMarkers = function (obj) {
        let newArr = [];

        function makerArray(obj) {
            if (Array.isArray(obj)) {
                for (let i = 0; i < obj.length; i++) {
                    makerArray(obj[i]);
                }
            } else {
                if ((Object.keys(obj).includes('coordinates'))) {
                    newArr.push(obj);
                } else {
                    makerArray(obj.array)
                }
            }
        }

        makerArray(obj);
        console.log('makerArrayOfMarkers');
        return newArr;
    }

}]);
