angular.module("my_world")
    .factory("AuthSvc", function($q, $http){
        var _user = {
            authenticated: function(){
                return !!this.username;
            }
        };
        
        function authenticate(user){
           var dfd = $q.defer(); 
           $http.post("/api/session", user)
            .then(
                function(response){
                   dfd.resolve(response.data); 
                },
                function(response){
                   dfd.reject(response.data); 
                }
            );
           return dfd.promise;
        }
        
        return {
           user: _user,
           authenticate: authenticate
        }
        
        
    });