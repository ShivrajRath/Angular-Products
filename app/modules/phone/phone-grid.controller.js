/**
 * Phone grid controller
 */
var phoneModule = angular.module('phone', []);

phoneModule.controller('PhoneGridController', ['$scope', 'phoneModel',
    function($scope, phoneModel) {

        $scope.sort = function(key) {
            $scope.sortkey = key;
        };

        $scope.changeCart = function(phone) {
            // phone.addedToCart = !phone.addedToCart;
            phoneModel.changeCart(phone);
        };
    }
]);
