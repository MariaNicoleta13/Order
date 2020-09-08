// Define the `orderApp` module
var orderApp = angular.module("orderApp", ["ui.bootstrap"]);
orderApp.controller("OrderCtrl", function OrderCtrl($scope, $http, $uibModal) {
  console.log("in OrderCtrl controller ");
  $scope.Sort = function (event) {
    if (event.target.text == "All") $scope.search = "";
    else $scope.search = event.target.text;
  };
  var data = localStorage.getItem("data");
  if (data) {
    $scope.produse = JSON.parse(data);
  } else
    $http({ method: "POST", url: "produse.json" }).success(function (data) {
      localStorage.setItem("data", JSON.stringify(data));
      $scope.produse = data; // response data
    });

  $scope.openModal = function () {
    var modalInstance = $uibModal.open({
      animation: true,
      ariaLabelledBy: "modal-title",
      ariaDescribedBy: "modal-body",
      templateUrl: "directives/orderModal.html",
      size: "lg",
      controller: "orderModalCtrl",
      resolve: {
        produse: function () {
          return $scope.produse;
        },
      },

      windowClass: "show",
      backdropClass: "show",
    });
    modalInstance.result.then(
      function (result) {
        // $scope.store.produse.push(result);
        // $scope.produse.update();
      },
      function (error) {
        if (error == "cancel") return;
        if (error == "backdrop click") console.log("backdrop click");
      }
    );
  };
  console.log($scope);
});
