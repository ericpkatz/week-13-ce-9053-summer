angular.module("my_world")
    .factory("AuthSvc", function($q, $http){
        var _user = {
            authenticated: function(){
                return !!this.username;
            }
        };
        
        function authenticate(user){
           var dfd = $q.defer(); 
           $http.post("/api/session", user);
           return dfd.promise;
        }
        
        return {
           user: _user,
           authenticate: authenticate
        }
        
        
    });