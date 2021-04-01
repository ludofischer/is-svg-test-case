const isSvg = require('is-svg');

const out1 = isSvg('<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feGaussianBlur stdDeviation="5" /></filter></svg>#filter')
console.log(out1); // should be false, but is true instead
const out2 = isSvg('<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feGaussianBlur stdDeviation="5" /></filter></svg>filter')
console.log(out2); // should be false, but is true instead
