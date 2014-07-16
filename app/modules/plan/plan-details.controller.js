var planModule = angular.module('plan', []);

planModule.controller('PlanDetailsController', ['$scope', '$routeParams', 'planService',
    function($scope, $routeParams, planService) {
        $scope.planId = $routeParams.planId;

        $scope.selectPlan = function(plan) {
            planService.selectPlan(plan);
        };
    }
]);
