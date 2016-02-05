// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

var app = angular.module('Hookline', []);

app.controller('UsersController', ['$scope', '$http', function ($scope, $http) {

  $http.get('/api/users').then(function (response) {
    var data = response.data;
    $scope.users = data.users;
  });

  $scope.newUser = {};
  $scope.createUser = function () {
    $http.post('/api/users', {user: $scope.newUser}).then(function (response) {
      var data = response.data;
      $scope.users.push(data);
    });
  };







}]);
