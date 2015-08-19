angular.module("my_world")
    .controller("LoginCtrl", function($scope, $location, NavSvc, AuthSvc){
        console.log(AuthSvc.user.authenticated())
        if(AuthSvc.user.authenticated()){
            AuthSvc.user.username = null;
            $location.path("/");
            return;
        }
        NavSvc.setSelectedPath("/login");
        var users = [
            {
                username: "Moe",
                id: 1
            },
            {
                username: "Larry",
                id: 8
            },
            {
                username: "Curly",
                id: 9
            }
        ];
        
        users.unshift({id: -1, username: "-- choose a user --"})
        $scope.users = users;
        $scope.user = users[0];
        
        $scope.$watch("user", function(curr, prev){
            if(curr.id != -1){
                AuthSvc.user.username = curr.username;
                $location.path("/");
            }
        });
        
    });