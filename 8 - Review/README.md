# Review

In this lesson, you learned how to use Mongoose to interact with a MongoDB database. Let’s review some of the topics that we covered:
- Mongoose is a Node package that interacts with a running MongoDB database.
- MongoDB stores documents in collections and collections of documents in databases. Each document has key-value pairs as entries.
- Using a ``Schema``, we can set the structure of documents dynamically, using ``paths`` with schema types and validators.
- Models are JavaScript classes that we compile from our ``Schema`` definitions.
- You can use models to create, read, update, and delete documents from a database.
- You can query a database using ``.find()`` and ``.findOne()``. [Mongo also provides query operators to allow for more complex queries.](https://docs.mongodb.com/v3.4/reference/operator/query-comparison/)

Mongoose also allows for the creation of methods associated with a database:
- ``.statics()`` adds static “class” methods to the Models itself.
- ``.methods()`` adds an instance method to documents.