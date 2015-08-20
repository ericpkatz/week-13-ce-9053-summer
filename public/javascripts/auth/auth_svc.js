angular.module("my_world")
    .factory("AuthSvc", function($q, $http, $location){
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
                  // dfd.resolve(response.data); 
                  $http.get("/api/session?token=" + response.data)
                    .then(function(response){
                        _user.username = response.data.username;
                        _user.luckyNumber = response.data.luckyNumber;
                        $location.path("/");
                    })
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