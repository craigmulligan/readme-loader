'use strict';

/**
 * @module loaders.readme
 */

const md = require('./lib/md');
const loaderUtils = require('loader-utils');
const helpers = require('./lib/helpers');
const filter = require("lodash/filter");
const _ = require('./lib/lodash');

/**
* @summary Parses a readme source into object
* @function
* @public
*
* @param {String} source - A README.markdown string
* @returns {Object} - an object with extracted properties from the markdown
* @returns {Object.title} - the first heading
* @returns {Object.lead} - the first after Object.title
* @returns {Object.logo} - url of an image with where alt=logo
* @returns {Object.screenshot} - url of an image with where alt=screenshot
* @example
* const README = require('readme?delimiterTag=h2!./README.md');
* console.log(README)
*/

function getLoaderConfig(context) {
  const query = loaderUtils.parseQuery(context.query);
  const configKey = query.config || 'readmeLoader';
  const config = context.options && context.options.hasOwnProperty(configKey) ? context.options[configKey] : {};

  delete query.config;

  return Object.assign(query, config);
}


module.exports = function(source) {
  const query = loaderUtils.parseQuery(this.query);
  this.cacheable();
  const config = getLoaderConfig(this);
  const tree = md.parse(source, {});

  const obj = {
    title: (tokens => (
      _(tokens)
        .filterByType('heading')
        .filter((t) => (!helpers.containsBadge(t)))
        .head()
        .content
      )
    )(_.cloneDeep(tree)),
    lead: (tokens => (
      _(tokens)
        .filterByType('paragraph')
        .filter((t) => (!helpers.containsBadge(t)))
        .head()
        .content
      )
    )(_.cloneDeep(tree)),
    badges: (tokens => (
      _(tokens)
        .filterByType('paragraph')
        .filter(helpers.containsBadge)
        .map((t) => t.content)
        .join('')
      )
    )(_.cloneDeep(tree)),
  };

  console.log(JSON.stringify(obj, null, 2));

  return 'module.exports = ' + JSON.stringify(obj);
};
