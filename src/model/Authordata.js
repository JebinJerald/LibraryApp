const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://userone:userone@ictakfiles.fsfqq.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    title: String,
    image: String,
    about: String
});

var Authordata = mongoose.model('authordata',AuthorSchema);

module.exports = Authordata;