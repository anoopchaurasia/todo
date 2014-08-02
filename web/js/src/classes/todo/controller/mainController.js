function mainController($scope, $rootScope) {
    
    function safeApply(){

        if($rootScope.$$phase != '$apply' &&$rootScope.$$phase != '$digest'){
            $rootScope.$apply();
        }
    }

    $scope.todo = new todo.Todo();
}