/**
 * Phone grid controller
 */
var phoneModule = angular.module('phone', []);

phoneModule.controller('PhoneGridController', ['$scope', 'phoneService', '$filter', '$rootScope',
    function($scope, phoneService, $filter, $rootScope) {

        /**
         * Copying the phoneModel data to presentation model
         */
        $scope.phones = $rootScope.phoneModel;
        var allPhones = $scope.phones;

        var orderBy = $filter('orderBy');
        var filterBy = $filter('filter');

        $scope.changeCart = function(phone) {
            phoneService.changeCart(phone);
        };

        $scope.order = function(event, predicate, reverse) {
            event.preventDefault();
            $scope.phones = orderBy($scope.phones, predicate, reverse);
        };

        $scope.filter = function(event, expression) {
            event.preventDefault();
            $scope.phones = allPhones;
            $scope.phones = $filter('filterByChildArrayEls')($scope.phones, 'filters', expression);
        };
    }
]);
