// need Schema to require mongoose database
const Schema = require('mongoose')


//const itemschema = new schema, that will need name(string) required true, picture(string), category(objectId), price(number) required true
//add timestamp for the heck of it
const itemSchema = new Schema ({
    name: {type: String, required: true}, 
    emojiURL: String,
    category: {type: Schema.Types.ObjectId, ref: 'Category'},
    price: {type: Number, required: true, default: 0.00},
    rating: {type: Number, default: 0}
}, {
    timestamps: true
})


//export module itemSchema
module.exports = itemSchema