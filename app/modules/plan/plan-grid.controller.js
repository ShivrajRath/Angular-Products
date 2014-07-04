'use strict';
/**
 * Phone grid controller
 */
var planModule = angular.module('plan', []);

planModule.controller('PlanGridController', ['$scope', '$http','$rootScope','planModel',
    function($scope, $http, $rootScope, planModel) {

        $scope.sort = function(key) {
            $scope.sortkey = key;
        };

        $scope.model = planModel.model;

        /**
         * Event listeners
         */
        $scope.$on('planModelLoad', function(event, model) {
            $scope.model = model;
        });

        $scope.selectPlan = function(planId) {
            $rootScope.$broadcast('selectPlan', planId);
        };
    }
]);
