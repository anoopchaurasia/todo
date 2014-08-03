angular.module("app", [])
.directive("listDragDrop", [
	function () {
		function linker (scope, element, attrs) {
			element.sortable({
				placeholder: "ui-state-highlight",
				start: function (e, helper) {
					helper.placeholder
					.height(helper.item.height())
					.width(helper.item.width())
					helper.placeholder.
					css({
						"padding-top": helper.item.css('padding-top'),
						"padding-right": helper.item.css('padding-right'),
						"padding-bottom": helper.item.css('padding-bottom'),
						"padding-left": helper.item.css('padding-left'),
						"margin-top": helper.item.css('margin-top'),
						"margin-right": helper.item.css('margin-right'),
						"margin-bottom": helper.item.css('margin-bottom'),
						"margin-left": helper.item.css('margin-left'),
						border: "1px solid transparent",
						'border-radius': '3px'
					});
					element.find('.list.add').hide();
					helper.item.css('transform', "rotate(4deg)");
				},
				stop: function (e, helper) {
					element.find('.list.add').show();
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
.directive('inlineEditor', ["$timeout",
	function ($timeout) {
		function linker(scope, element, attrs) {
			element.click(function () {
				scope.inlineEditor.editText(element);
			});
			if(!scope.card.text) {
				$timeout(function(){
					scope.inlineEditor.editText(element);
				}, 100);
			}
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