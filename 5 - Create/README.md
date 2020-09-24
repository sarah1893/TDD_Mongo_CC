# Create

Our model is a class with properties that we define in our schema. We can construct documents as instances of our model. Creating documents and saving them to the database can be done by calling ``.create()`` on our model. In the poetry app example it would look like this:
```javascript
const Poem = mongoose.model('Poem', poemSchema);

const poemProperties = {
    title: "Rewrite Reality" ,
    body: ["Re-imagine the consumption of the stagnant status quo", 
           "No matter how nice you dress", 
           "The emperor is still wearing no clothes"],
    published: false
}

runWithDatabase(async () => {
  // Create and save a document
  await Poem.create(poemProperties);
});
```

The ``runWithDatabase`` function is designed to accept a method as input, and run it after we connect to a database and before we disconnect from it. If you want to learn more about the methods in **database.js**, read the documentation for:
- [Connect](http://mongoosejs.com/docs/api.html#index_Mongoose-connect)
- [Drop](https://docs.mongodb.com/manual/reference/method/db.dropDatabase/)
- [Disconnect](http://mongoosejs.com/docs/api.html#index_Mongoose-disconnect)

This would create a new document in our database, with the paths and properties defined in the code above. In the next exercise, we will learn how to query the database and confirm our application is successfully sending and retrieving information from our MongoDB collection of documents.

## Instructions

1. Create an entry in a database. Create a ``const`` variable named ``properties`` and set it equal to an object with the paths:
- ``item: "cloak"``
- ``magicalProperty: "invisibility"``
- ``unitCost: 25``
- ``totalUnits: 100``
Inside ``runWithDatabase()``, call ``.create()`` on ``MagicItem`` and pass the ``properties`` variable as an argument.