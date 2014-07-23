var filterGroup = angular.module('filters', []);

/**
 * Returns filtered array based on a boolean value of it's key
 */
filterGroup.filter('filterListOnCondition', function() {
    return function(input, array, condKey, boolCondition) {
        return _.filter(array, function(arrayEl) {
            return arrayEl[condKey] === boolCondition;
        });
    };
});


/**
 * Returns filtered array based on presence of a string inside an array attribute of an array
 */
filterGroup.filter('filterByChildArrayEl', function() {
    return function(array, tag, filterStr) {
        if (filterStr) {
            if (typeof filterStr === 'string') {
                return _.filter(array, function(arrayEl) {
                    return _.contains(arrayEl[tag], filterStr);
                });
            }
        } else {
            return array;
        }
    };
});
