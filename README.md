[![npm][npm]][npm-url]
[![test][test]][test-url]

### Install

```bash
npm i -D readme-loader
```

### Usage

```js
module: {
  rules: [
    {
      test: /\.md?$/,
      loader: 'readme-loader',
      options: ...
    },
    ...
  ],
}
```

or inline:

```js
require("readme-loader!./README.md");
```

### Examples

```
cd /examples && webpack
```

> MIT

> http://www.opensource.org/licenses/mit-license.php

> Copyright (c) 2016 craig-mulligan @craig-mulligan

> Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

> The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[npm]: https://img.shields.io/npm/v/readme-loader.svg
[npm-url]: https://npmjs.com/package/readme-loader

[test]: http://img.shields.io/travis/craig-mulligan/readme-loader.svg
[test-url]: https://travis-ci.org/craig-mulligan/readme-loader
