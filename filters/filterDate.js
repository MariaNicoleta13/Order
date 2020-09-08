orderApp.filter("filterDate", function () {
  return function (obiectProdus) {
    if (obiectProdus.objKeys.NUMAR == null) {
      obiectProdus.objKeys.NUMAR = "0";
    }
    if (obiectProdus.objKeys.TOTAL == null) obiectProdus.objKeys.TOTAL = "0";
    return obiectProdus;
  };
});
