(function () {
  orderApp.controller("orderModalCtrl", [
    "$scope",
    "$uibModalInstance",
    "produse",

    function ($scope, $uibModalInstance, produse) {
      // Do something with myService
      $scope.produse = produse.filter(function (produs) {
        return produs.objKeys.STATUS == "ToBeBought";
      });

      $scope.clearProduct = function (produs) {
        produs.objKeys.STATUS = "";
        $scope.produse.splice($scope.produse.indexOf(produs), 1);
        // $scope.produse.splice(
        //   $scope.produse.findIndex(
        //     (produsDinLista) => produsDinLista.name === produs.name
        //   ),
        //   1
        // );
      };

      $scope.setBoughtStatus = function (produs, event) {
        $scope.clearProduct(produs);
        event.preventDefault();
      };
      $scope.sumOfTotals = function (produse) {
        var sum = 0;
        produse.filter((produs) => (sum += parseInt(produs.objKeys.TOTAL)));
        return sum;
      };
      //   TODO
      // var orders = [];
      // localStorage.setItem("orders", JSON.stringify(orders));
      $scope.submitOrder = function (produse) {
        // if (produse.length > 0) {
        // }
        produse.forEach(function (produs) {
          produs.objKeys.STATUS = "";
          produs.objKeys.NUMAR = "1";
          //   localStorage.setItem(produs.objKeys.NUMAR, "1");
          produs.objKeys.TOTAL =
            parseInt(produs.objKeys.NUMAR) * parseInt(produs.objKeys.PRET);
          //   $scope.clearProduct(produs);
          $scope.produse = [];
        });
      };
      $scope.ok = function () {
        $uibModalInstance.close();
      };

      $scope.cancel = function () {
        $uibModalInstance.dismiss("cancel");
      };
      console.log($scope);
    },
  ]);
})();
