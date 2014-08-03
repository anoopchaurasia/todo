function mainController($scope, $rootScope) {
    
    function safeApply(){

        if($rootScope.$$phase != '$apply' &&$rootScope.$$phase != '$digest'){
            $rootScope.$apply();
        }
    }

    $scope.inlineEditor = new common.InlineEditor();

    $scope.todo = new todo.Todo();

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
}
