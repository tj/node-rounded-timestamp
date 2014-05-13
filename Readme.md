
# rounded-timestamp

  Rounded timestamp utility functions, useful for
  things like generating redis keys.

## Installation

```
$ npm install rounded-timestamp
```

## Example

```js
var timestamp = require('rounded-timestamp');
var ms = require('ms');

console.log(timestamp.second());
console.log(timestamp.minute());
console.log(timestamp.hour());
console.log(timestamp.day());

console.log();
var date = new Date - ms('1d');
console.log(timestamp.second(date));
console.log(timestamp.minute(date));
console.log(timestamp.hour(date));
console.log(timestamp.day(date));
```

yields:

```
1400015159000
1400015100000
1400014800000
1399939200000

1399928759000
1399928700000
1399928400000
1399852800000
```

# License

  MIT