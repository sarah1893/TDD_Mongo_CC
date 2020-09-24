console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('exercise.js', 'utf8');

describe('', function () {
  it('', function() {
    let structureSelector = function() {
      const magicItemSchema = new mongoose.Schema({
        item: $String,
        magicalProperty: $String,
        unitCost: $Number,
        totalUnits: $Number
      })
    }  

    let varCallbacks= [
      function($Number, $String){
        if($String.name !== "String"){
          return {failure: "Did you set a `magicalProperty` path to `String`?"}
        }  else if ($Number.name !== "Number" ) {
          return {failure: "Did you set a path `unitCost` and `totalUnits` path values to `Number`?"}
        }
       return true;
      }
    ]  

    let isMatchSelector = Structured.match(code, structureSelector,{varCallbacks: varCallbacks});
    let failureMessage = varCallbacks.failure ||'Did you set paths for `magicalProperty`, `unitCost`, `totalUnits`? ';
    assert.isOk(isMatchSelector, failureMessage);
  })
})