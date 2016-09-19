'use strict';

todoApp.controller('TodoController', ['$scope', '$http','todoFactory','FVService',
    function($scope, $http, todoFactory,FVService)
    {
        $scope.details = false;
        $scope.addArea = false;
        $scope.todos = todoFactory.get();

        $scope.settings = {
          searchFilterColumn:['country','code']
        };

        $scope.newForm = function(){
           $scope.addArea = true;
           $scope.details = false;
           $scope.save = true;
           $scope.edit = false;

           $scope.todo = {
                country : '',
                code : '',
                city : ''
            };
        };

        $scope.addItem = function(todo)
        {
            $scope.vMessage = {};
              var validationCriteria = {
                country : ['required', 'country_name'],
                code : ['required'],
                city : ['required']
              };
              $scope.vMessage = FVService.formValidation(todo,validationCriteria);

            if($scope.vMessage.status){
                todoFactory.add(todo);
                $scope.todo = {
                    country : '',
                    code : '',
                    city : ''
                };
                $scope.save = true;
          }
        };

        $scope.editItem = function(todoId){
            $scope.todo = todoFactory.detail(todoId);
            $scope.save = false;
            $scope.edit = true;
            $scope.addArea = true;
            $scope.details = false;
        };

        $scope.updateItem = function( object, todoId){
            todoFactory.update( object, todoId);
        };

        $scope.detailItem = function(todoId){
            $scope.todoDetail = todoFactory.detail(todoId);
            $scope.details = true;
            $scope.addArea = false;
        };

        $scope.deleteItem = function(data){
           $scope.details = false;
           $scope.addArea = false;
           todoFactory.delete(data);
        };
    }
]);
