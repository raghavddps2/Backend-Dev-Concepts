const mongoose  = require('mongoose')
const Schema = mongoose.Schema


//create a new schema for geolocation
const GeoSchema = new Schema({
    type:{
        type: String,
        default: "Point",
    },
    coordinates:{
        type: [Number],
        index: "2dsphere"
    }
});

//create ninja schema and moel.
const NinjaSchema = new Schema({
    name:{
        type: String,
        required: [true,"Name field is required"]
    },
    rank:{
        type:String,   
    },
    available:{
        type: Boolean,
        default: false
    },
    //We created the schema above.
    geometry:GeoSchema
});

//create the model.-> represent a collection in the database.
//Mongodb pluralizes the datbase name for us
const Ninja = mongoose.model('ninja',NinjaSchema)

module.exports = Ninja;
