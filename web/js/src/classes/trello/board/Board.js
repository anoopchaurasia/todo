fm.Package("trello.board");
fm.Import("trello.list.ListManager");
fm.Class("Board");

trello.board.Board = function (me, ListManager) {
	
	this.Board = function () {

		this.listManager = new ListManager();
	};
};