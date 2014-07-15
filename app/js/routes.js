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
            templateUrl: function(params) {
                return getTemplate('productDetails')
            },
            controller: 'PhoneDetailsController'
        }).when('/products/plans', {
            templateUrl: 'modules/plan/plan-grid.partials.html',
            controller: 'PlanGridController'
        }).when('/products/plans/:planId', {
            templateUrl: 'modules/plan/plan-details.partials.html',
            controller: 'PlanDetailsController'
        }).when('/cart', {
            templateUrl: 'modules/cart/cart-details.partials.html',
            controller: 'CartDetailsController'
        }).
        otherwise({
            redirectTo: '/products'
        });
    }
]);

function getTemplate(templateId) {
    if (templateId === "productDetails") {
        if (isMobile()) {
            return 'modules/phone/phone-details.mobile.partials.html';
        } else {
            return 'modules/phone/phone-details.partials.html';
        }
    }
}
