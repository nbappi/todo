'use strict';

todoApp.controller('TodoController', ['$scope', '$http',
    function($scope, $http)
    {
        $scope.todos = [];

        $scope.addItem = function(todo){
            $scope.todos.push(todo);
        }
    }
]);
