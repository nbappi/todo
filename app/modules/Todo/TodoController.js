'use strict';

todoApp.controller('TodoController', ['$scope', '$http','todoFactory',
    function($scope, $http, todoFactory)
    {
        $scope.todos = todoFactory.get();

        $scope.addItem = function(todo)
        {
            todoFactory.add(todo);

            $scope.todo = {
                country : '',
                code : '',
                city : ''
            };
        };

        $scope.editItem = function(todoId){
            $scope.todo = todoFactory.detail(todoId);
        };

        $scope.editItem = function(todoId){
            $scope.todo = todoFactory.detail(todoId);
        };

        $scope.updateItem = function( object, todoId){
            todoFactory.update( object, todoId);
        };

        $scope.detailItem = function(todoId){
            $scope.todoDetail = todoFactory.detail(todoId);
        };

        $scope.deleteItem = function(data){
            todoFactory.delete(data);
        };
    }
]);
