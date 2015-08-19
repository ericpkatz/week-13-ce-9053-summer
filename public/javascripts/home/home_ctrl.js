angular.module("my_world")
    .controller('HomeCtrl', function($scope, NavSvc, AuthSvc){
       NavSvc.setSelectedPath("/");
       $scope.message = "Welcome to My World";
       $scope.user = AuthSvc.user;
    });