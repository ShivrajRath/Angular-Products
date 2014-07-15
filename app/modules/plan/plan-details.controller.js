var planModule = angular.module('plan', []);

planModule.controller('PlanDetailsController', ['$scope', '$routeParams', 'planModel',
    function($scope, $routeParams, planModel) {
        $scope.planId = $routeParams.planId;

        $scope.selectPlan = function(plan) {
            planModel.selectPlan(plan);
        };
    }
]);
