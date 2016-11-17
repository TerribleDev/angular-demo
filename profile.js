// Code goes here

(function(){
    var app = angular.module("awesome", ["firebase"]);
    app.controller("awesome", function($scope, $firebaseObject, $firebaseAuth) {
        var auth = $firebaseAuth();
        $scope.auth = auth;
        $scope.auth.$onAuthStateChanged(function(firebaseUser) {
             $scope.firebaseUser = firebaseUser;
             var ref = firebase.database().ref();
             var syncObject = $firebaseObject(ref.child('profiles').child(firebaseUser.uid));
            syncObject.$bindTo($scope, "profile");
        });
    });
  

  
})();
