//custom search filter
todoApp.filter('searchFilter', function() {
  return function(items,key,cols){
    if (!key) {
      return items;
    }
    if(!cols){
      return items;
    }
    var filtered = [];
    key = key.toLowerCase();

    angular.forEach(items, function(item) {
      var pushFlag = false;

      for(var i=0; i<cols.length;i++){
        if((item[cols[i]]) && (item[cols[i]].toLowerCase().indexOf(key) != -1)){
          pushFlag = true;
        }
      }
      if(pushFlag){
        filtered.push(item);
      }
    });

    return filtered;
  };
});

todoApp.filter('pagination', function()
{
 return function(input, start)
 {
  start = +start;
  return input.slice(start);
 };
});