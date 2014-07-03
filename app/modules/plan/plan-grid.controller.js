'use strict';
/**
 * Phone grid controller
 */
var planModule = angular.module('plan', []);

planModule.controller('PlanGridController', ['$scope', '$http',
    function($scope, $http) {

        $scope.sort = function(key) {
            $scope.sortkey = key;
        };

        $http.get('json/plans.json').success(function(data) {
            $scope.model = data;
        });
    }
]);