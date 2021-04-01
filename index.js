const isSvg = require('is-svg');

const out = isSvg('<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feGaussianBlur stdDeviation="5" /></filter></svg>#filter')
console.log(out); // should be false, but is true instead
