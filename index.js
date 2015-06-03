'use strict';

/**
 * Dependencies
 */

const roundrobin = require('round-robin');
const crypto = require('crypto');


/**
 * Expose ip-hash
 */

module.exports = iphash;


/**
 * ip-hash
 */

function iphash (arr) {
  let prefix = md5(arr.join(''));
  let next = roundrobin(arr);
  let map = new WeakMap();
  
  return function (ip) {
    let hash = md5(prefix + ip);
    
    if (map.has(hash)) {
      return map.get(hash);
    }
    
    let item = next();
    
    map.set(hash, item);
    
    return item;
  };
}


/**
 * Shortcuts
 */

function md5 (str) {
  return crypto.createHash('md5').update(str).digest();
}
