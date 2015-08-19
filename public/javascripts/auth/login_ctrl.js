angular.module("my_world")
    .controller("LoginCtrl", function($scope, $location, NavSvc, AuthSvc){
        console.log(AuthSvc.user.authenticated())
        if(AuthSvc.user.authenticated()){
            AuthSvc.user.username = null;
            $location.path("/");
            return;
        }
        NavSvc.setSelectedPath("/login");
        
        $scope.user = {};
        
        $scope.login = function(){
            AuthSvc.authenticate($scope.user)
                .then(
                    function(){
                        console.log("SUCCESS");
                    },
                    function(){
                        console.log("FAILURE");
                    }
                );
        }
        
        
    });