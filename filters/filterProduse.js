orderApp.filter("filterProduse", function () {
    return function (arrayProduse, query) {
      var resultArray = [];
      var search = angular.copy(query);
      if (!query) return arrayProduse;
      for (var i = 0; i < arrayProduse.length; i++) {
        var item = arrayProduse[i];
        if (item && item.objKeys && item.objKeys.TIP) {
          if (item.objKeys.TIP.includes(search)) resultArray.push(item);
          else if (search == "Favorites")
            resultArray = arrayProduse.filter(
              (produs) => produs.objKeys.FAVORITE == "Yes"
            );
        }
      }
      return resultArray;
    };
  });