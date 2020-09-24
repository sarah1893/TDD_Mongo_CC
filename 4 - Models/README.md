# Models

To use our ``poemSchema`` definition:
```javascript
const poemSchema = new mongoose.Schema({
  title: String,
});
```

we need to convert our ``poemSchema`` into a ``Model`` we can work with. ``Schemas`` provide the definition for a model. A model maps to a collection in your MongoDB database.

Models are defined by passing a Schema instance to ``mongoose.model`` like this:
```javascript
mongoose.model(modelName, schema):
```

The first argument is the singular name of the collection your model is for. The second argument is your previously created ``Schema``. In the case of our poetry web app, turning our ``schema`` into a ``model`` would look like this:
```javascript
const Poem = mongoose.model('Poem', poemSchema); 
```

Models are constructors that we define based on our ``Schema``. They represent documents which can be saved and retrieved from our database. All document creation and retrieval from the database is handled by these models.

## Instructions

1. Use ``mongoose.model()`` to create a model named ``MagicItem`` with the ``magicItemSchema`` Schema.

> Hint
> Create a ``const`` variable named ``MagicItem`` and set it equal to ``mongoose.model('MagicItem', nameOfSchema);``
> Replace ‘nameOfSchema’ with the name of your ``schema``.