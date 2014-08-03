fm.Package("todo.list");
fm.Import("todo.card.CardManager");
fm.Class('List');
todo.list.List = function (me, CardManager) {
	
	this.List = function (data) {
		this.cardManager = new CardManager();
		this.head_text = data.head_text;
	};
};