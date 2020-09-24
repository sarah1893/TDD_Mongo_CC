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

const MagicItem = mongoose.model('MagicItem', magicItemSchema);

runWithDatabase(async () => {
  await  MagicItem.create(manyItems);
  let finder = await MagicItem.findOne({ item: 'cloak' });
  console.log(`Found one: ${finder.item}`);
    
  let cheapObjects = await MagicItem.find({ unitCost: { $lt: 50 }})
  console.log(`Found ${MagicItem.length} magic objects`);

});


