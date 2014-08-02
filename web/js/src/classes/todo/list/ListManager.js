fm.Package("todo.list");
fm.Import("todo.list.List");
fm.Class("ListManager", "abstract.ItemList");
todo.list.ListManager = function (base, me, List) {
	
	this.ListManager = function (lists) {
		this.base(List, lists || []);
		this.add(new List());
		this.add(new List());
		this.add(new List());
		this.add(new List());
		this.add(new List());
	};
};