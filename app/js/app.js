'use strict';

/**
 * All modules must be defined here. No module define should be at other places
 */

/* Application global module*/
var app = angular.module('angularProductApp', [
    'ngRoute',
    'service',
    'phone',
    'plan'
]);

/**
 * Service Module
 */
var serviceModule = angular.module('service', []);
/**
 * Functionality sepefic modules
 */

// Create a system of module creation without duplicity and then on fly DI 