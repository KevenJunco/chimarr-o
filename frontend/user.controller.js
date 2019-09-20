angular.module('appUser')
.controller('userController', userController );


function userController($scope, $http)  {

    $scope.vm ={};
    let vm = $scope.vm;

   // let api = $resource('localhost:3003/users');

    vm.salvarUser = salvarUser;

    function salvarUser() {
        //ds = new api();

        console.log($scope.p);

     //   const url = 'http://localhost:3003/users'
        const data = $scope.p;

var http = new XMLHttpRequest();
var url = 'http://localhost:3003/users';
var params = 'orem=ipsum&name=binny';
http.open('POST', url, true);

//Send the proper header information along with the request
http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
    }
}
http.send(params);



        
      /*  $http.post(url, data).then(function (response) {
        // This function handles success
        console.log('sucesso');
        }, function (response) {
        // this function handles error
        console.log(response);
        });*/
    
 
    }

}