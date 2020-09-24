console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('exercise.js', 'utf8');

describe('', function () {
  it('', function() {
    let structureSelector = function() {
      const magicItemSchema = new mongoose.Schema({
        $item: $String
      })
    }  

    let varCallbacks= [
      function($item, $String){
        if($String.name !== "String") {
          return {failure: "Did you set a path with the name `item` to hava a value equal to `String`"}
        }
       return true;
      }
    ]  

    let isMatchSelector = Structured.match(code, structureSelector,{varCallbacks: varCallbacks});
    let failureMessage = varCallbacks.failure ||'Did you create a schema using `new mongoose.Schema({})`?';
      
    assert.isOk(isMatchSelector, failureMessage)  
  })
})