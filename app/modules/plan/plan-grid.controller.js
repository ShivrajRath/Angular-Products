'use strict';
/**
 * Phone grid controller
 */
var planModule = angular.module('plan', []);

planModule.controller('PlanGridController', ['$scope', 'planModel',
    function($scope, planModel) {
        $scope.selectPlan = function(plan) {
        	planModel.selectPlan(plan);
        };
    }
]);
