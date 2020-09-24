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

const properties = {
	item: "cloak" ,
	magicalProperty: "invisibility" ,
	unitCost: 25 ,
	totalUnits: 100
}

runWithDatabase(async () => {
  await MagicItem.create(properties)
})
