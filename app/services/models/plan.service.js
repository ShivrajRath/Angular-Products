angular.module('service', []).service('planModel', ['$http', '$rootScope', 'localstorageservice',
    function($http, $rootScope, localstorageservice) {

        var self = this;

        /**
         * If plan model is present in localstorage, pick it from there
         */

        if (localstorageservice.methods.isKey('planModel')) {
            self.model = JSON.parse(localstorageservice.methods.get('planModel'));
            $rootScope.planModel = self.model;
        } else {
            $http.get('json/plans.json').success(function(data) {
                self.model = data.products;
                $rootScope.planModel = self.model;

                /**
                 * Set the model to localstorage
                 */
                localstorageservice.methods.set('planModel', self.model);
            });
        }

        $rootScope.$watch("planModel", function(model) {
            if (model && model.length) {
                localstorageservice.methods.set('planModel', self.model);
            }
        }, true);

        /**
         * Model CRUD Properties
         */

        var proto = Object.getPrototypeOf(this);

        proto.selectPlan = function(plan) {
            angular.forEach(self.model, function(value, key) {
                value.isSelected = false;
            }, this);

            plan.isSelected = !plan.isSelected;
        }
    }
]);
