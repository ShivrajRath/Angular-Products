/**
 * This aims to fetch phone model from server/localstorage
 * Keep the model always synced.
 * Trigger events based on model changes
 */
angular.module('service', []).service('phoneModel', ['$http', '$rootScope', 'localstorageservice',
    function($http, $rootScope, localstorageservice) {

        var self = this;

        /**
         * If model is present in localstorage fetch it from there
         */
        if (localstorageservice.methods.isKey('phoneModel')) {
            self.model = JSON.parse(localstorageservice.methods.get('phoneModel'));
            $rootScope.phoneModel = self.model;
        } else {
            $http.get('json/phones.json').success(function(data) {
                self.model = data && data.products;
                $rootScope.phoneModel = self.model;
                /**
                 * Persisting the model to localstorage
                 */
                localstorageservice.methods.set('phoneModel', self.model);

            });
        }

        $rootScope.$watch("phoneModel", function(model) {
            if (model && model.length) {
                localstorageservice.methods.set('phoneModel', self.model);
            }
        }, true);

        /**
         * Model methods
         */
        
        var proto = Object.getPrototypeOf(this);

        proto.changeCart = function(phone){
            phone.addedToCart = !phone.addedToCart;
        }
    }
]);
