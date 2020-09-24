const {mongoose, runWithDatabase} = require('./database');
const manyItems = require('./items');

const magicItemSchema = new mongoose.Schema({
  item: String
})