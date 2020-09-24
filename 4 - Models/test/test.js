console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('exercise.js', 'utf8');

describe('', function () {
  it('', function() {
  
  let structureSelector = function() {
    const MagicItem = mongoose.model("MagicItem", magicItemSchema);
  }
  let structureSelectorTwo = function(){
    const MagicItem = mongoose.model('MagicItem', magicItemSchema);
  }
  
  let isMatchSelector = Structured.match(code, structureSelector);
  let isMatchSelectorTwo =  Structured.match(code, structureSelectorTwo);
  let failureMessage = 'Did you use `mongoose.model()` and pass `"MagicItem"` as the first argument, and your schema as the second?';
  assert.isOk(isMatchSelector || isMatchSelectorTwo, failureMessage)
  })
})