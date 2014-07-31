fm.Package("trello.card");
fm.Import("trello.card.Card");
fm.Class("CardManager", "abstract.ItemList");
trello.card.CardManager = function (base, me, Card) {
	
	this.CardManager = function (cards) {
		this.base(Card, cards || []);
		this.add(new Card());
		this.add(new Card());
		this.add(new Card());
		this.add(new Card());
	};
};