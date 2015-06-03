# ip-hash [![Circle CI](https://circleci.com/gh/vdemedes/ip-hash.svg?style=svg)](https://circleci.com/gh/vdemedes/ip-hash)

Implementation of ip-hash balancing algorithm, based on [round-robin](https://github.com/vdemedes/round-robin).


### Installation

```
$ npm install ip-hash --save
```


### Usage

```javascript
const iphash = require('ip-hash');

let servers = [
	'server-1',
	'server-2',
	'server-3'
];

let assign = iphash(servers);

assign('192.168.0.1'); // => 'server-1'
assign('192.168.0.2'); // => 'server-2'
assign('192.168.0.3'); // => 'server-3'

assign('192.168.0.1'); // => 'server-1'
```


### Tests

[![Circle CI](https://circleci.com/gh/vdemedes/ip-hash.svg?style=svg)](https://circleci.com/gh/vdemedes/ip-hash)

```
$ make test
```


### License

ip-hash is released under the MIT license.
