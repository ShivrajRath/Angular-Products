/**
 * Phone grid controller
 */
var phoneModule = angular.module('phone', []);

phoneModule.controller('PhoneGridController', ['$scope', '$http',
    function($scope, $http) {

        $scope.sort = function(key) {
            $scope.sortkey = key;
        };

        $scope.changeCompare = function(phone) {
            phone.checked = !phone.checked;
        };

        $http.get('json/phones.json').success(function(data) {
            $scope.model = data;
        });
    }
]);
