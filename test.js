'use strict';

/**
 * Dependencies
 */

const iphash = require('./');

require('chai').should();


/**
 * Tests
 */

describe ('ip-hash', function () {
  
  it ('return correct item', function () {
    let servers = [
      'server-1',
      'server-2',
      'server-3'
    ];
    
    let assign = iphash(servers);
    
    assign('192.168.0.1').should.equal('server-1');
    assign('192.168.0.2').should.equal('server-2');
    assign('192.168.0.3').should.equal('server-3');
    assign('192.168.0.1').should.equal('server-1');
    assign('192.168.0.2').should.equal('server-2');
    assign('192.168.0.3').should.equal('server-3');
  });
  
});
