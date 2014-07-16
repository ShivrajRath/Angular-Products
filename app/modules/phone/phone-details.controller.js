var phoneModule = angular.module('phone');

phoneModule.controller('PhoneDetailsController', ['$scope', '$routeParams', 'phoneService',
    function($scope, $routeParams, phoneService) {
        $scope.phoneId = $routeParams.phoneId;
    }
]);