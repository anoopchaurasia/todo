fm.Package("todo.board");
fm.Import("todo.list.ListManager");
fm.Class("Board");

todo.board.Board = function (me, ListManager) {
	
	this.Board = function () {

		this.listManager = new ListManager();
	};
};