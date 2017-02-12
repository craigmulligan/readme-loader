const _ = require('lodash');
const md = require('./md');

const badgeAlts = [
  'CircleCI Status',
  'Coverage Status',
  'npm version',
  'PRs Welcome',
  'Chat',
  'Build Status',
  'Windows Build Status'
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
      return _.some(badgeAlts, (alt) => {
        const regx = new RegExp(alt, 'i');
        return regx.test(child.content);
      });
    });
  }
  return false;
};

exports.stripBadges = (t) => {
  const children = _.filter(t.children, (child) => {
    // only strip images
    child.type !== 'image' && true;
    // only images with alt tag === one of badgeAlts
    return !_.some(badgeAlts, (alt) => {
      const regx = new RegExp(alt, 'i');
      return regx.test(child.content);
    });
  });

  // create new object with out badges
  return Object.assign(t, {
    children: children,
    content: children.map((child) => child.content).join('')
  });
};
