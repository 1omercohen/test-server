const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    first_name: String,
    last_name: String,
    gender: String,
    avatar: String,
    job: Object,
    contacts: Object,
    location: Object,
    isDeleted: Boolean,
});

const User = mongoose.model('TestReact', UserSchema);

module.exports = User;