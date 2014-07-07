var phoneModule = angular.module('phone');

phoneModule.controller('PhoneDetailsController', ['$scope', '$http', '$routeParams', '$rootScope', 'phoneModel',
    function($scope, $http, $routeParams, $rootScope, phoneModel) {

        $scope.phoneId = $routeParams.phoneId;

        var model = phoneModel.model;
        $scope.phone = {};
        getPhone(model);

        $scope.$on("phoneModelLoad", function(event, model) {
            model = model;
            getPhone(model);
        });

        function getPhone(model) {
            angular.forEach(model, function(phone, index) {
                if (phone.phoneId === $scope.phoneId) {
                    $scope.phone = phone;
                    return;
                }
            });
        };
    }
]);
