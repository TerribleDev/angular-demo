// Code goes here

(function(){
  var app = angular.module('awesome', []);
  
  var mainController = function($scope){
    if(!$scope.username){
     
      $scope.username = "defaults brah";
    }
    $scope.runMe = function(){
      alert($scope.username);
    }
  };
  
  
  app.controller('awesome', mainController);
  

  
})();
