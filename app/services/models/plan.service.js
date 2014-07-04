angular.module('service', []).service('planModel', ['$http', '$rootScope',
    function($http, $rootScope) {

        var self = this;

        $http.get('json/plans.json').success(function(data) {
            self.model = data;
            $rootScope.$broadcast('planModelLoad', self.model);
        });

        $rootScope.$on('selectPlan', function(event, planId) {
            angular.forEach(self.model, function(plan, key) {
                if (key === planId) {
                	plan.isSelected = true;
                } else {
                    plan.isSelected = false;
                }
            });
            self.model[planId].isSelected = true;
        });
    }
]);
