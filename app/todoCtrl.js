
angular.module('focus-app').controller('todoCtrl', function ($scope, todoStorage) {

    $scope.todoStorage = todoStorage;

    $scope.$watch('todoStorage.data', function() {
        $scope.todoList = $scope.todoStorage.data;
    });

    $scope.todoStorage.findAllOnList(function(data){
        $scope.todoList = data;
        $scope.$apply();
    });

    $scope.addToList = function() {

      if ($scope.newContent) {
        todoStorage.addToList($scope.newContent);
        $scope.newContent = '';
      }
    }

    $scope.toggleCompleted = function() {
        todoStorage.sync();
    }

    $scope.removeAllFromList = function() {
        todoStorage.removeAllFromList();
    }

    $scope.removeFromList = function(todo) {
        todoStorage.removeFromList(todo);
    }
});
