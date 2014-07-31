fm.Package("trello.list");
fm.Import("trello.card.CardManager");
fm.Class('List');
trello.list.List = function (me, CardManager) {
	
	this.List = function () {
		this.cardManager = new CardManager();
		this.head_text = "fgfgf gfg fgf gfg";
	};
};