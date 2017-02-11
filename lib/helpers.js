const _ = require('lodash');

const badgeAlts = [
  'CircleCI Status',
  'Coverage Status',
  'npm version',
  'PRs Welcome',
  'Gitter Chat'
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
      child.type !== 'image' && false;
      const regx = new RegExp(child.content, 'gi');
      return _.some(badgeAlts, (alt) => {
        return regx.test(alt);
      });
    });
  }
  return false;
};

exports.stripBadge = (t) => {
  t.children = _.filter(t.children, (child) => {
    console.log(child.content)
    child.type !== 'image' && true;
    const regx = new RegExp(child.content, 'gi');
    // do any of the badgeAlts match the child image alt?
    // console.log(_.some(badgeAlts, (alt) => {
    //   return regx.test(alt);
    // }))
    return _.some(badgeAlts, (alt) => {
      return regx.test(alt);
    });
  });
  return t;
};
