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
filterGroup.filter('filterByChildArrayEls', function() {
    return function(array, tag, arrayEls) {
        if (arrayEls) {
            if (typeof arrayEls === 'string') {
                return _.filter(array, function(arrayEl) {
                    return _.contains(arrayEl[tag], arrayEls);
                });
            }
        } else {
            return array;
        }
    };
});
