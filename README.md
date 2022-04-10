# calculator-js

![Under Development](https://img.shields.io/badge/under-development-orange.svg)
## HTML/CSS/JavaScript calculator application
### Calculator does the following math operations:
- [x] addition
- [x] subtraction
- [x] multiplication
- [x] division
- [x] percent
### Additional features:
- [x] sign change (positive/negative number)
- [ ] undo operations
### TODO:
- [ ] dealing with floating point number precision
- [ ] improving history
- [ ] doing proper history back (use tree structure for this?)
- [ ] app stoppers working on github pages, need to fix it
### Technology stack:
- HTML
- CSS
- Vanilla JavaScript
- Jest as testing tool https://jestjs.io/ working on the top of NodeJS
- Babel to translate JS code to meet Jest requirements. Jest has problems with ES6 imported/exported modules.
### Testing instruction:
Installing jest
- Add test environment to .babelrc in main folder:
```xml
{
  "env": {
    "test": {
      "plugins": ["@babel/plugin-transform-modules-commonjs"]
    }
  }
}
```
- install ES6 transform plugin:
```
npm install --save-dev @babel/plugin-transform-modules-commonjs
```
### Live:
https://lucosmo.github.io/calculator-js/


### License
[![CC0](https://i.creativecommons.org/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)
