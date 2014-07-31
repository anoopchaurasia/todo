function mainController($scope, $rootScope) {
    
    function safeApply(){

        if($rootScope.$$phase != '$apply' &&$rootScope.$$phase != '$digest'){
            $rootScope.$apply();
        }
    }

    $scope.trello = new trello.Trello();
}