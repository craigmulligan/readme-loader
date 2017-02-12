const _ = require('lodash');
const md = require('./md');

const badgeAlts = [
  'CircleCI Status',
  'Coverage Status',
  'npm version',
  'PRs Welcome',
  'Gitter Chat',
  'Build Status'
]

exports.typeIs = (token, type) => {
  if (token) {
    return token.type === type
  }
  return false;
};

// checks if a token object contains conventional tags
exports.containsBadge = (t) => {
  if (t) {
    return _.some(t.children, (child) => {
      child.type !== 'image' && true;
      const regx = new RegExp(child.content, 'gi');
      return _.some(badgeAlts, (alt) => {
        return regx.test(alt);
      });
    });
  }
  return false;
};

exports.stripBadges = (t) => {
  const children = _.filter(t.children, (child) => {
    // only strip images
    child.type !== 'image' && true;
    const regx = new RegExp(child.content, 'gi');
    // only images with alt tag === one of badgeAlts
    return !_.some(badgeAlts, (alt) => {
      return regx.test(alt);
    });
  });

  // create new object with out badges
  return Object.assign(t, {
    children: children,
    content: children.map((child) => child.content).join('')
  });
};
