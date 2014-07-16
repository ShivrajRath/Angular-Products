'use strict';
/**
 * Phone grid controller
 */
var planModule = angular.module('plan', []);

planModule.controller('PlanGridController', ['$scope', 'planService',
    function($scope, planService) {
        $scope.selectPlan = function(plan) {
        	planService.selectPlan(plan);
        };
    }
]);