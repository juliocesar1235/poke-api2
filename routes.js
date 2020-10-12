var cards = require('./cards-controller');

module.exports = function(router) {
    router.post('/create', cards.create);
    router.get('/get', cards.getCards);
    router.get('/get/:title', cards.getCard);
    router.put('/update/:id', cards.updateCard);
    router.delete('/remove/:id', cards.removeCard);
}