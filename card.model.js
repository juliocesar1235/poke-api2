var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var cardSchema = new Schema({
    title :{
        type: String,
        unique : false,
        required : true
    },
    poke_type : {
        type: String,
        unique : false,
        required : true
    },
    points : {
        type: Number,
        unique : false,
        required : true
    }
}, {
    timestamps: true
});

module.exports = cardSchema;