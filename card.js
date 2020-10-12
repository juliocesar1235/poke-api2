var mongoose = require('mongoose');
var cardSchema = require('./card.model');

cardSchema.statics = {
    create : function(data, cb) {
        var card = new this(data);
        card.save(cb);
    },

    get: function(query, cb) {
        this.find(query, cb);
    },

    getByName: function(query, cb) {
        this.find(query, cb);
    },

    update: function(query, updateData, cb) {
        this.findOneAndUpdate(query, {$set: updateData},{new: true}, cb);
    },

    delete: function(query, cb) {
        this.findOneAndDelete(query,cb);
    }
}

var cardModel = mongoose.model('Card', cardSchema);
module.exports = cardModel;