# Paths

The key-value pair in a schema is called a path. Paths define the name and type of fields in a MongoDB document.
```javascript
const poemSchema = new mongoose.Schema({
  title: String,
  body: [String],
  published: Boolean,
})
```

The schema above has three paths: ``title``, ``body``, and ``published``. Each path is set to a different schema type. The ``[String]`` schema type, assigned to ``body``, means a document that is derived from the ``poemSchema`` schema can store an array of strings to the ``body`` field.

[Paths in Mongoose can have many data types](http://mongoosejs.com/docs/schematypes.html). Besides data types like string, integer, boolean, and array, Mongoose also provides:
- Timestamp − timestamp. This can be handy for recording when a document has been modified or added.
- Object ID − This datatype is used to store the document’s ID.

## Instructions

1. Add the following paths and matching SchemaTypes to ``magicItemSchema``:
- ``magicalProperty`` its ``schemaType`` is ``String``
- ``unitCost`` its ``schemaType`` is ``Number``
- ``totalUnits`` its ``schemaType`` is ``Number``