function mainController($scope, $rootScope) {
    
    $scope.safeApply = function (){

        if($rootScope.$$phase != '$apply' &&$rootScope.$$phase != '$digest'){
            $rootScope.$apply();
        }
    }

    $scope.inlineEditor = new common.InlineEditor();

    $scope.todo = new todo.Todo({"board":{"listManager":{"items":[{"cardManager":{"items":[{"text":"xxcxc","order":0},{"text":"xxc","order":1},{"text":"xcxc","order":2},{"text":"xcxcxc","order":3}]},"head_text":"ewr5ty"},{"cardManager":{"items":[{"text":"sdsd"},{"text":"sdsdsd"}]},"head_text":"asdffdf"}]}}});
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
