// Create Angular module
var qwestion = angular.module("qwestion", ["firebase"]);

// Angular controller
qwestion.controller("questionCtrl", ["$scope", "$firebaseArray", function($scope, $firebaseArray) {

  var fbRef = new Firebase("https://qwestion.firebaseio.com/");

  $scope.questions = $firebaseArray(fbRef);

  $scope.addQuestion = function() {
    
    $scope.questions.$add({
      user: $scope.name,
      question: $scope.body
    });
    $scope.body = "";
    
  };

}]);