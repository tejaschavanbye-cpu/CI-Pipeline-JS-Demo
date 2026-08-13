const assert = require('assert');
const { add } = require('./app');

// Test check karega ki add(2, 3) === 5 hai ya nahi
assert.strictEqual(add(2, 3), 5);
console.log("All tests passed successfully!");
