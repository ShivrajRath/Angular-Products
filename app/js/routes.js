'use strict';

var app = angular.module('angularProductApp');

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/products', {
            templateUrl: 'modules/products/products-display.partials.html'
        }).when('/products/phones', {
            templateUrl: 'modules/phone/phone-grid.partials.html',
            controller: 'PhoneGridController'
        }).when('/products/phones/:phoneId', {
            templateUrl: 'modules/phone/phone-details.partials.html',
            controller: 'PhoneDetailsController'
        }).when('/products/plans', {
            templateUrl: 'modules/plan/plan-grid.partials.html',
            controller: 'PlanGridController'
        }).when('/products/plans/:planId', {
            templateUrl: 'modules/plan/plan-details.partials.html',
            controller: 'PlanDetailsController'
        }).
        otherwise({
            redirectTo: '/products'
        });
    }
]);
