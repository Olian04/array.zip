# small-array-zip

`Array.zip` in 126 bytes.

__NPM:__ `npm i small-array-zip`

```js
require('small-array-zip');

const a = [1, 2, 3];
const b = ['a', 'b', 'c']

const c = Array.zip(a, b);
console.log(c); /*
c = [
  [1, 'a'],
  [2, 'b'],
  [3, 'c']
];
*/
```

Fiddle demo: https://jsfiddle.net/42axj3kt/8/
