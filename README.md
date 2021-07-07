# ow bug

```sh
git clone git@github.com:SimonSiefke/ow-bug.git &&
cd ow-bug &&
npm ci &&
node index.js
```

Bug Code:

```js
import ow from "ow";

const unicorn = (input) => {
  ow(input, ow.string.minLength(5));
};

unicorn(3); // TypeError: Cannot read property 'minLength' of undefined
```
