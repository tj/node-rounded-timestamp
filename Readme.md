
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
console.log(timestamp.second());
console.log(timestamp.minute());
console.log(timestamp.hour());
console.log(timestamp.day());
```

yields:

```
1388504192000
1388504160000
1388502000000
1388448000000
```

# License

  MIT