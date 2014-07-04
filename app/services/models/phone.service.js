/**
 * This aims to fetch phone model from server/localstorage
 * Keep the model always synced.
 * Trigger events based on model changes
 */

angular.module('service', []).service('phoneModel', ['$http', '$rootScope',
    function($http, $rootScope) {

        var self = this;

        $http.get('json/phones.json').success(function(data) {
            self.model = data;
            $rootScope.$broadcast('phoneModelLoad', self.model);
        });
    }
]);
