angular.module("app", [])
.directive("listDragDrop", [
	function () {
		function linker (scope, element, attrs) {
			element.sortable();
			element.disableSelection();
		}

		return {
			link: linker
		};
	}
])
.directive("cardDragDrop", [
	function () {
		function linker (scope, element, attrs) {
			element.sortable();
			element.disableSelection();
		}

		return {
			link: linker
		};
	}
]);

fm.Include("todo.Todo",function(){
    $(document).ready(function(){
        angular.bootstrap(document, ["app"]);
    });
});