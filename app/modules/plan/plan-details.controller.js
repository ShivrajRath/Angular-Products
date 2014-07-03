var planModule = angular.module('plan');

planModule.controller('PlanDetailsController', ['$scope', '$routeParams',
    function($scope, $routeParams) {
        $scope.planId = $routeParams.planId;
    }
]);