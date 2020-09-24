# Queries

At this point, we will start creating instances in a MongoDB database, then query the database for the values we saved. All of the method calls and queries will be passed to ``runWithDatabase()``.

If we wanted to search for the poem that we saved to the database, we could write a Mongoose query and call ``.findOne()`` on our ``Poem`` model:
```javascript
runWithDatabase(async () => {
   Poem.create(poemProperties)

   const poemMatch = await Poem.findOne({ title: 'Rewrite Reality' });

   console.log(`Found poem: ${poemMatch.body}`);
});
```

``.findOne()`` returns a document that has a ``title`` path with the value ``'Rewrite Reality'``. We confirm this by using ``console.log()`` to see the value of the path ``body`` for the returned document.

This is good when we are looking for one document. What if we wanted to find all the documents that matched a specified criteria? We can use ``.find()``, which returns an array of all the documents that match the argument passed to it.

Imagine we had a collection of documents with the following values:
```javascript
const manyPoems = [
  {
    title: "Rewrite Reality" ,
    body: ["Re-imagine the consumption of the stagnant status quo",
               "No matter how nice you dress",
               "The emperor is still wearing no clothes"],
    published: false ,
},
  {
    title: "Phasing",
    body: ["I imagine myself a second moon;",
              "waning in and out of sequence with the tides"],
    published: true,
},
  {
    title: "One of Those Days",
    body: ["My shirt and spirit”,
             "are bent inside-out-backwards"],
    published: true,
}
]
```

In the example below, we create the above documents using a ``Poem`` model, then we use the ``find`` method to return all poems with a ``published`` property equal to true:
````javascript
runWithDatabase(async () => {
  Poem.create(manyPoems);

  let publishedPoems = await Poem.find({ published: true })

  // Check that it works by logging the number of returned documents
  console.log(`Published Poems: ${publishedPoems.length}`)
});
````

To the right, we’ve added **items.js** to your project. It contains an array of items that we will save to the MongoDB database. In **exercise.js**, we import the items from **items.js** and use ``MagicItem.create()`` to save the items as documents to our database.

## Instructions

1. Follow the steps below to write a query using ``.findOne()`` to locate the document in your database with the ``item: "cloak"``.
- Inside ``runWithDatabase()`` and below ``.create()``, add a ``let`` variable named ``finder`` and set it equal to ``await`` and then your query.
- Before running your script in the terminal, add this on the following line:
```javascript
console.log(`Found one: ${finder.item}`);
```
- Run your database query using the following command in the terminal: ``node exercise.js``.

> Hint
You can use the following example as a model for the syntax you would use:
```javascript
let finder = await ModelName.findOne({ pathName: value });
```

2. Add a second query to your code, which uses ``.find()`` to locate all ``magicObject`` documents that have a ``unitCost`` less than ``50``.

You can use the mongoose query operator ``$lt``. ``$lt`` selects the documents where the value of the field is less than (i.e. <) the specified value. The syntax is:
```javascript
.find({field: {$lt: value} }).
```

- Create a ``let`` variable named ``cheapObjects`` and set it equal to ``await`` and then your query.

- Before running your script in the terminal, you can add this line after your code:
```javascript
console.log(`Found ${cheapObjects.length} magic objects`);
```

- Run your database query using the following command in the terminal: ``node exercise.js``.