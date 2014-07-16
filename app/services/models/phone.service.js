/**
 * This aims to fetch phone model from server/localstorage
 * Keep the model always synced.
 * Trigger events based on model changes
 */
angular.module('service', []).service('phoneService', ['$http', '$rootScope', 'localstorageservice', '$timeout',
    function($http, $rootScope, localstorageservice, $timeout) {

        var self = this;

        /**
         * If model is present in localstorage fetch it from there
         */
        if (localstorageservice.methods.isKey('phoneModel')) {
            $rootScope.phoneModel = JSON.parse(localstorageservice.methods.get('phoneModel'));
        } else {
            $http.get('json/phones.json').success(function(data) {
                $rootScope.phoneModel = data && data.products;

                /**
                 * Persisting the model to localstorage
                 */
                localstorageservice.methods.set('phoneModel', $rootScope.phoneModel);

            });
        }

        $rootScope.$watch("phoneModel", function(model) {
            if (model && model.length) {
                localstorageservice.methods.set('phoneModel', $rootScope.phoneModel);
            }
        }, true);

        /**
         * Resetting the model when localstorage changes
         */
        window.addEventListener('storage', function(event) {
            if (event.key === 'phoneModel') {
                $rootScope.phoneModel = JSON.parse(event.newValue);
                /**
                 * Updates the data to view bindings on other tabs
                 * $scope.$apply() should occur as close to the async event binding as possible.
                 */
                $rootScope.$apply(function() {
                    // This is to avoid scope apply to throw errors
                });
            }
        }, false);

        /**
         * Model methods
         */

        var proto = Object.getPrototypeOf(this);

        proto.changeCart = function(phone) {
            phone.addedToCart = !phone.addedToCart;
        }
    }
]);
