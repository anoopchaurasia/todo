fm.Package("todo.card");
fm.Import("todo.card.Card");
fm.Class("CardManager", "abstract.ItemList");
todo.card.CardManager = function (base, me, Card) {

	this.CardManager = function (cards) {
		this.base(Card, cards || []);
        this.addCard();
	};

    this.addCard = function (){
        this.add(new Card());
    };
};