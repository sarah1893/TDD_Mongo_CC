console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');
const code = fs.readFileSync('exercise.js', 'utf8');

describe('', function () {
  it('', function() {
  
  let structureSelector = function() {
    runWithDatabase(async () => {
	    await  MagicItem.create(manyItems);

    	let finder = await MagicItem.findOne($cloak);
      
      console.log(`Found one: ${finder.item}`);
    });

  }

  let varCallbacks= [
    function($cloak){
      if($cloak.value !== 'cloak'){
        return {failure: "Did you add `{item: 'cloak'}` to your `.findOne()` query?"}
              }
     return true;
    }
]

  let isMatchSelector = Structured.match(code, structureSelector,{varCallbacks: varCallbacks});
  let failureMessage = varCallbacks.failure ||'Did you use the syntax: `await MagicItem.findOne({key: value})`? ';
    
    assert.isOk(isMatchSelector, failureMessage)
  })
})