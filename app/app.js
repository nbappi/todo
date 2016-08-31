'use strict';

var todoApp = angular.module('todoApp', [
    'ngRoute'
]);

todoApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            controller : "TodoController",
            templateUrl : "modules/Todo/todo.html"
        })
        .otherwise({
            redirectTo: '/'
        });
}]);