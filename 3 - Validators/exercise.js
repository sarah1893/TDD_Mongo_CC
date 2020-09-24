const {mongoose, runWithDatabase} = require('./database');
const manyItems = require('./items');


const magicItemSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true
  },
  magicalProperty: {
    type: String ,
    required: true
  },
  unitCost: {
    type: Number,
    required: true
  },
  totalUnits: {
    type: Number,
    required: true
  }

})