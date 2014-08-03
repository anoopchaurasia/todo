function mainController($scope, $rootScope) {
    
    function safeApply(){

        if($rootScope.$$phase != '$apply' &&$rootScope.$$phase != '$digest'){
            $rootScope.$apply();
        }
    }

    $scope.inlineEditor = new common.InlineEditor();

    $scope.todo = new todo.Todo();
    window.todot = $scope.todo;
    $scope.showAddListForm = function () {
    	$scope.showAddListFormFlag = true;	
    };

    $scope.saveList = function () {
    	$scope.todo.board.listManager.addList({
    		head_text: $scope.newAddListFormHeaderText
    	});
    	$scope.newAddListFormHeaderText = "";
    	$scope.showAddListFormFlag = false;	
    };

    $scope.addCard = function (cardManager) {
    	cardManager.addCard({
    		text: ""
    	});
    };

    $scope.updateListIndex = function (current, old){
        $scope.todo.board.listManager.swapItemForIndex(current, old);
    };
}
