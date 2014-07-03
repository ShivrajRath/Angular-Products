var phoneModule = angular.module('phone');

phoneModule.controller('PhoneDetailsController', ['$scope', '$http', '$routeParams',
    function($scope, $http, $routeParams) {

        $scope.phoneId = $routeParams.phoneId;

    }
]);