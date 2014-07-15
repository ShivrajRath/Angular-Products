var phoneModule = angular.module('phone');

phoneModule.controller('PhoneDetailsController', ['$scope', '$routeParams', 'phoneModel',
    function($scope, $routeParams, phoneModel) {
        $scope.phoneId = $routeParams.phoneId;
    }
]);