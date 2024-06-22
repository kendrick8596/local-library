const mongoose = require('mongoose');
const { DateTime } = require('luxon');

const Schema = mongoose.Schema;

const AuthorSchema = new Schema(
    {
    first_name: { 
        type: String,
        required: true,
        maxLength: 100,
    },
    family_name: {
        type: String,
        required: true,
        maxLength: 100,
    },
    date_of_birth: {
        type: Date,
    },
    date_of_death: {
        type: Date,
    },
});

// Virtual for author's full name
AuthorSchema.virtual('name').get(function() {
    // avoid errors where author does not have a family or first name
    // handle the exception by returning an empty string for that case
    let fullname = '';
    if (this.first_name && this.family_name) {
        fullname = `${this.family_name}, ${this.first_name}`;
    }

    return fullname;
});

// Virtual for authors URL
AuthorSchema.virtual('url').get(function () {
    // do not use arrow function as we will need the .this object
    return `/catalog/author/${this._id}`;
});

AuthorSchema.virtual('date_of_birth_formatted').get(function () {
    return this.date_of_birth ?
            DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_MED) : '';
});

AuthorSchema.virtual('date_of_death_formatted').get(function () {
    return this.date_of_death ?
            DateTime.fromJSDate(this.date_of_death).toLocaleString(DateTime.DATE_MED) : '';
});

AuthorSchema.virtual('lifespan').get(function () {
    const birth = this.date_of_birth ?
DateTime.fromJSDate(this.date_of_birth).year : '';
    const death = this.date_of_death ?
DateTime.fromJSDate(this.date_of_death).year : '';
    return `${birth} - ${death}`;
});

//export the model
module.exports = mongoose.model('Author', AuthorSchema);