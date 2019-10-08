angular.module("appUser").controller("userController", userController);

function userController($scope, $http) {
  $scope.vm = {};
  let vm = $scope.vm;
  console.log($scope);


  vm.salvarUser = salvarUser;

  function salvarUser() {
    

    console.log($scope.p);
    const data = $scope.p;

    var http = new XMLHttpRequest();
    var url = "http://localhost:3003/users";
    var params = "orem=ipsum&name=binny";
    http.open("POST", url, true);

    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/json");
    http.onreadystatechange = function() {
      //Call a function when the state changes.
      if (http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
      }
    };
    http.send(JSON.stringify($scope.p));

   
  }
}
