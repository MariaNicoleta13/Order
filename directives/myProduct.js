(function () {
  orderApp.directive("myProduct", function () {
    return {
      restrict: "E",
      scope: { produs: "=" },
      templateUrl: "directives/myProduct.html",
      controller: [
        "$scope",
        function ($scope) {
          $scope.setFavorite = function (produs, event) {
            if (produs.objKeys.FAVORITE === "Yes") {
              produs.objKeys.FAVORITE = "";
              console.log(" was removed from your Favorites list");
            } else {
              produs.objKeys.FAVORITE = "Yes";
              console.log(" was added to your Favorites list");
            }
            var data = JSON.parse(localStorage.getItem("data"));
            for (var i = 0; i < data.length; i++) {
              if (data[i]["name"] == produs.name) {
                data[i].objKeys.FAVORITE = produs.objKeys.FAVORITE;
                break;
              }
            }
            localStorage.setItem("data", JSON.stringify(data));
            event.preventDefault();
          };
          $scope.setBoughtStatus = function (produs, event) {
            if (produs.objKeys.STATUS == "ToBeBought") {
              produs.objKeys.STATUS = "";
            } else {
              produs.objKeys.STATUS = "ToBeBought";
            }
            event.preventDefault();
          };
          $scope.modifyNumber = function (produs, contor, event) {
            produs.objKeys.NUMAR =
              parseInt(produs.objKeys.NUMAR) + parseInt(contor);
            if (
              parseInt(produs.objKeys.NUMAR) < 0 ||
              produs.objKeys.NUMAR == ""
            )
              produs.objKeys.NUMAR = "0";

            var newTotal = produs.objKeys.NUMAR * produs.objKeys.PRET;

            if (parseInt(produs.objKeys.TOTAL) != newTotal) {
              produs.objKeys.TOTAL = newTotal;
            }

            event.preventDefault();
          };
          $scope.setInput = function (produs) {
            if (produs.objKeys.NUMAR) {
              if (isNaN(produs.objKeys.NUMAR)) {
                produs.objKeys.NUMAR = parseInt(produs.objKeys.NUMAR);
              }

              var newTotal = produs.objKeys.NUMAR * produs.objKeys.PRET;

              if (parseInt(produs.objKeys.TOTAL) != newTotal) {
                produs.objKeys.TOTAL = newTotal;
              }
            } else produs.objKeys.NUMAR = "0";
          };
        },
      ],
    };
  });
})();
