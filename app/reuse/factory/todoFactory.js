todoApp.factory('todoFactory', function(){
    var factory = {};
    var todoData = [];

    factory.get = function(){
        return todoData;
    },
        factory.add = function(data){
            todoData.push(data);
        },
        factory.detail = function(todoId){
            return todoData.filter(function(data){
                return data.country === todoId;
            })[0];
        },
        factory.update = function(object , todoId){
            for (var i in todoData) {
                if (todoData[i].country == todoId) {
                    todoData[i].country = object.country;
                    todoData[i].code = object.code;
                    todoData[i].city = object.city;
                    break;
                }
            }
        },
        factory.delete = function(data)
        {
            for (var i =0; i < todoData.length; i++)
                if (todoData[i].country == data) {
                    todoData.splice(i,1);
                    break;
                }
        }

    return factory;
});