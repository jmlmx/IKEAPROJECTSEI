// need to require mongoose and bcrypt
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const SALT_ROUNDS = 5;
//user schema will need name (string) require this to be true and email (string) require to be true, and make it unique, so emails cant be the same
//password(string) add minimum length and required
//add timestamps to know when people sign in/up
//add isLoggedin boolean and trim to user schema
const userSchema = new Schema ({

    username: {type: String, unique: true, required: true},
    email: {type: String, unique: true, trim: true, required: true},
    password: {type: String, minLength: 5, trim: true, required: true},
    isLoggedIn: {type: Boolean, required: false}
}, {
timestamps: true,
toJSON: {
    transform: function(doc, ret) {
        delete ret.password;
        return ret;
        }
    } 
});


//add userschema save function
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    //updates the password with the computed hash
    this.password = await bcrypt.hash(this.password);
    return next();
})
//stuff//

//add export module at the end.
module.exports = mongoose.model('User', userSchema);
