console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('exercise.js', 'utf8');

describe('', function () {
  it('', function() {
  
  let structureSelector = function() {
    magicItemSchema.statics.findMostExpensive = function(callback) {
      return this.findOne({}).sort('unitCost').exec(callback);
    }
    magicItemSchema.methods.use = function(callback) {
      this.totalUnits -= this.unitCost;
      return this.save();
    }
  }

  let isMatchSelector = Structured.match(code, structureSelector);
  let failureMessage = 'Did you create your statics and methods below your schema and above your model? ';
  assert.isOk(isMatchSelector, failureMessage)
  })
})