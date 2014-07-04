var planModule = angular.module('plan');

planModule.controller('PlanDetailsController', ['$scope', '$routeParams', '$rootScope', 'planModel',
    function($scope, $routeParams, $rootScope, planModel) {
        $scope.planId = $routeParams.planId;

        $scope.plan = planModel.model && planModel.model[$scope.planId];

        $scope.$on('planModelLoad', function(event, model) {
            $scope.plan = model[$scope.planId];
        });

        $scope.selectPlan = function(planId) {
            $rootScope.$broadcast('selectPlan', planId);
        };
    }
]);
