const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GenreSchema = new Schema(
    {
        name: {
            type: String,
            minLength: 3,
            maxLength: 100,
        },
    });

    GenreSchema.virtual('url').get(function () {
        // We do not use an arrow function because we need to use the this object
        return `/catalog/genre/${this._id}`;
    });

    //export the model
    module.exports = mongoose.model('Genre', GenreSchema);