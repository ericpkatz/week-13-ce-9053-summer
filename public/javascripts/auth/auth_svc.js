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
                  return $http.get("/api/session?token=" + response.data);
                }
            )
            .then(function(response){
                _user.username = response.data.username;
                _user.luckyNumber = response.data.luckyNumber;
            })
            .then(function(){
                $location.path("/");
            })
            .catch(function(response){
                   dfd.reject(response.data); 
            });
           return dfd.promise;
        }
        
        return {
           user: _user,
           authenticate: authenticate
        }
        
        
    });