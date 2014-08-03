fm.Package("todo.card");
fm.Import("todo.card.Card");
fm.Class("CardManager", "abstract.ItemList");
todo.card.CardManager = function (base, me, Card) {

	this.CardManager = function (cards) {
		this.base(Card, cards || []);
	};

    this.addCard = function (card){
        this.add(new Card(card));
    };

    this.saveCard = function(card) {
    	
    };
};