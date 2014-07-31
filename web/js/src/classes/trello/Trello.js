fm.Package("trello");
fm.Include("trello.controller.mainController");
fm.Import("trello.board.Board");
fm.Class("Trello");
trello.Trello = function (me, Board) {
	
	this.Trello = function () {
		
		this.board = new Board();	
	};
};