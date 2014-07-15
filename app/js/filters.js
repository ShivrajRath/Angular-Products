var filterGroup = angular.module('filters', []);

filterGroup.filter('filterListOnCondition', function() {
    return function(input, array, condKey, boolCondition) {
        return _.filter(array, function(arrayEl) {
            return arrayEl[condKey] === boolCondition;
        });
    };
});
