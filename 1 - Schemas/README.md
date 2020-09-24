# Schemas

Mongoose is a JavaScript library that provides methods to interact with a MongoDB database. Mongoose translates JavaScript objects (JSON) to BSON data in a MongoDB database, and vice versa.

Mongoose interactions are based on Schema and Model declarations.
- A *Schema* defines the shape of the documents within that collection.
- A *Model* maps to a MongoDB collection and its documents.

## Mongoose Schema
Remember, each record in a MongoDB database is a document with key/value pairs as entries. Using Mongoose’s ``Schema``, we can set the structure of those documents dynamically.

Imagine you were creating a Schema for the database of a web-based poetry application where you could both write and publish poems. Each key in our ``poemSchema`` will define a property in our documents which will be cast to its associated SchemaType.
```javascript
const poemSchema = new mongoose.Schema({
  title: String
})
```

Each document that is derived from the ``poemSchema`` above will have a ``title`` property with a string saved to it.

Mongoose will cast mismatched data types to the specified SchemaType. For example, if we entered the number ``1`` as a title for a poem, Mongoose would cast the entry so that it entered that database as a string ``"1"``. Using casting, Mongoose ensures that string properties are assigned strings values.

## Instructions

1. Imagine you are developing a role-playing game where users will be able to access magic items from a database. Create a Schema for the following magic items:
- Create a ``const`` variable named ``magicItemSchema``
- Using ``new mongoose.Schema()``, set ``magicItemSchema`` to create a path with the name ``item`` and the schema type for ``item`` to ``String``

> Hint
> You can use the following structure to achieve this:
```javascript
const magicItemSchema = new mongoose.Schema({
  path: value
})
```