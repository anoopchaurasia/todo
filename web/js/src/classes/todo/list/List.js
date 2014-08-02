fm.Package("todo.list");
fm.Import("todo.card.CardManager");
fm.Class('List');
todo.list.List = function (me, CardManager) {
	
	this.List = function () {
		this.cardManager = new CardManager();
		this.head_text = "fgfgf gfg fgf gfg";
	};
};