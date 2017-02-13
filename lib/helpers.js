const _ = require('lodash');
const md = require('./md');

exports.typeIs = (token, type) => {
  if (token) {
    return token.type === type
  }
  return false;
};

// checks if a token object contains conventional badges
exports.containsBadge = (t) => {
  const badgeAlts = [
    'CircleCI Status',
    'Coverage Status',
    'npm version',
    'PRs Welcome',
    'Gitter',
    'Build Status',
  ]
  return _.some(badgeAlts, (alt) => {
    return new RegExp(alt, 'i').test(t.content);
  });
};

exports.stripBadges = (t) => {
  const children = _.filter(t.children, (child) => {
    // filter out children that contain badges
    exports.containsBadge(child);
  });

  // create new object with new children
  return Object.assign(t, {
    children: children,
    content: children.map((child) => child.content).join('')
  });
};
