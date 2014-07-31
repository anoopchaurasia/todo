angular.module("app", [])
.directive("listDragDrop", [
	function () {
		
	}
]);

fm.Include("trello.Trello",function(){
    $(document).ready(function(){
        angular.bootstrap(document, ["app"]);
    });
});