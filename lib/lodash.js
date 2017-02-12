const _ = require('lodash');
const helpers = require('./helpers');

_.mixin({
  stripBadges: (array) => array.map(token => {
    if (!helpers.containsBadge(token)) {
      return token
    }
    return helpers.stripBadges(token);
  }),
  filterByType: (array, type) => array.filter((token, i) => {
    return helpers.typeIs(array[i - 1], `${type}_open`);
  })
})

module.exports = _
