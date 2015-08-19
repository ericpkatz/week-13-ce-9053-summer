angular.module("my_world")
    .factory("AuthSvc", function(){
        var _user = {
            authenticated: function(){
                return !!this.username;
            }
        };
        
        return {
           user: _user 
        }
        
        
    });