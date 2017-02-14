const _ = require('lodash');
const helpers = require('./helpers');

_.mixin({
  stripBadges: (array) => array.map(token => {
    if (!helpers.containsBadge(token)) {
      return token
    }
    return helpers.stripBadges(token);
  }),
  getContent: (val) => {
    const hasContent = (token) => _.has(token, 'content') ? token.content : null

    if (_.isArray(val)) {
      return val.map(t => {
        return hasContent(t)
      })
    }
    return hasContent(val)
  },
  filterByType: (array, type) => array.filter((token, i) => {
    return helpers.typeIs(array[i - 1], `${type}_open`);
  }),
  clean: array => array.filter((t) => _.has(t, 'content') && /\S/.test(t.content)),
})

module.exports = _
