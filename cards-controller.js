var cards = require('./card');

exports.create = function (req, res, next) {
    let card = {
        title: req.body.title,
        poke_type: req.body.type,
        points: parseInt(req.body.points)
    };

    cards.create(card, function(err, card) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Card created successfully"
        })
    })
}

exports.getCards = function(req, res, next){
    cards.get({}, function(err, cards){
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            cards: cards
        })
    })
}

exports.getCard = function(req, res, next){
    cards.get({title: req.params.title}, function(err, cards){
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            cards: cards
        })
    })
}

exports.updateCard = function(req, res, next){
    let card = {
        title: req.body.title,
        poke_type: req.body.type,
        points: parseInt(req.body.points)
    };
    cards.update({_id: req.params.id}, function(err, cards){
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message: "Card updated successfully"
        })
    })
}
exports.removeCard = function(req, res, next){
    cards.get({title: req.params.title}, function(err, cards){
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message: "Card deleted successfully"
        })
    })
}


