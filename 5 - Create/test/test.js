console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');
const code = fs.readFileSync('exercise.js', 'utf8');

describe('', function () {
  it('', function() {
  let structureSelector = function() {
    const properties = {
    item: "cloak", 
    magicalProperty: "invisibility", 
    unitCost: 25,
    totalUnits: 100
   }
    runWithDatabase(async () => {
	    await MagicItem.create(properties);
    });
  }

  let isMatchSelector = Structured.match(code, structureSelector);
  let failureMessage = 'Did you use `await` on the same line, before calling `.create()` on `MagicItem`? ';
  assert.isOk(isMatchSelector, failureMessage);
  })
})