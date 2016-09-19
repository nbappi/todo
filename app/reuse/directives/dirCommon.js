'use strict';

todoApp.directive('searchInput', function()
{
    return {
        replace : true,
        restrict : 'AE',
        template : function(){
            return '<input type="text" ng-model="search" class="form-control" placeholder="Search">';
        }
    };
});