angular.module('service', []).service('planService', ['$http', '$rootScope', 'localstorageservice', '$timeout',
    function($http, $rootScope, localstorageservice, $timeout) {

        var self = this;

        /**
         * If plan model is present in localstorage, pick it from there
         */

        if (localstorageservice.methods.isKey('planModel')) {
            $rootScope.planModel = JSON.parse(localstorageservice.methods.get('planModel'));
        } else {
            $http.get('json/plans.json').success(function(data) {
                $rootScope.planModel = data.products;

                /**
                 * Set the model to localstorage
                 */
                localstorageservice.methods.set('planModel', $rootScope.planModel);
            });
        }

        $rootScope.$watch("planModel", function(model) {
            if (model && model.length) {
                localstorageservice.methods.set('planModel', $rootScope.planModel);
            }
        }, true);

        /**
         * Resetting the model when localstorage changes
         */
        window.addEventListener('storage', function(event) {
            if (event.key == 'planModel') {
                $rootScope.planModel = JSON.parse(event.newValue);
                /**
                 * Updates the data to view bindings on other tabs
                 */

                $rootScope.$apply(function() {
                    // This is to avoid scope apply to throw errors
                });
            }
        }, false);

        /**
         * Model CRUD Properties
         */

        var proto = Object.getPrototypeOf(this);

        proto.selectPlan = function(plan) {
            angular.forEach($rootScope.planModel, function(value, key) {
                value.isSelected = false;
            }, this);

            plan.isSelected = !plan.isSelected;
        }
    }
]);
