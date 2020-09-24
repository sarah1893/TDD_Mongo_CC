# Validators

In our original poetry application example we declared the schema type for our ``title`` as a ``String``:
```javascript
const poemSchema = new mongoose.Schema({
  title: String
})
```

Often, we want to specify more than just the type of a path — we can use   to ensure other aspects of a document’s input value.

## Validators

Data validation is intended to provide guarantees about user input. Mongoose has several built-in validators.

You can add required validators to our ``Schema`` in an object that you pass to the path:
```javascript
const poemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: [String],
    required: true
  },
  published: {
    type: Boolean,
    required: true
  },
})
```

In the example above, we set the schema type and required attributes for the ``title``, ``body``, and ``published`` paths. If the ``required`` property is true, then it is a required field when you save to the database.

If you save a document with an invalid path value, you will receive this error message ``Path `title` is required``.. You can define a custom error message like this:
```javascript
const poemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: 'Title is required!'
  }
})
```

[You can learn more about mongoose validators in their documentation.](http://mongoosejs.com/docs/validation.html)

## Instructions

1. Refactor your schema to use the object syntax, and add a required validator with a value of ``true`` to each of the paths.