angular.module("app", [])
.directive("listDragDrop", [
	function () {
		function linker (scope, element, attrs) {
			element.sortable({
				placeholder: "ui-state-highlight",
				start: function (e, helper) {
					helper.placeholder
					.height(helper.item.height())
					.width(helper.item.width());
					helper.item.css('transform', "rotate(4deg)");
				},
				stop: function (e, helper) {
					helper.item.css('transform', "rotate(0deg)");
				}
			});
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
			element.sortable({
				placeholder: "ui-state-highlight"
			});
			element.disableSelection();
		}

		return {
			link: linker
		};
	}
])
.directive('inlineEditor', [
	function () {
		function linker(scope, element, attrs) {
			fm.Include("common.InlineEditor", function(){
				new common.InlineEditor(element);
			});
		}

		return {
			link: linker
		}
	}
]);

fm.Include("todo.Todo",function(){
    $(document).ready(function(){
        angular.bootstrap(document, ["app"]);
    });
});