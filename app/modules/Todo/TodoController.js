'use strict';

todoApp.controller('TodoController', ['$scope', '$http',
    function($scope, $http)
    {
        $scope.todos = [ 'Dhaka', 'Rajshahi', 'Sylhet'];
    }
]);
