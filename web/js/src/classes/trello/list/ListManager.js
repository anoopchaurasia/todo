fm.Package("trello.list");
fm.Import("trello.list.List");
fm.Class("ListManager", "abstract.ItemList");
trello.list.ListManager = function (base, me, List) {
	
	this.ListManager = function (lists) {
		this.base(List, lists || []);
		this.add(new List());
		this.add(new List());
		this.add(new List());
		this.add(new List());
		this.add(new List());
	};
};