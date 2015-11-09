// Michael De Carvalho
'use strict';

app

.controller('mainController', function($scope){
  $scope.$watch('$viewContentLoaded', function(){
    if(window.innerWidth > 1024){
      $scope.show = true;
      $("#toggle-image").hide();
    }
    else{
      $("#toggle-image").show();
      $scope.show = false;
    }
  });

  $(window).resize(function(){
    if(window.innerWidth > 1024){
      $scope.show = true;
      $("#toggle-image").hide();
    }
    else{
      $("#toggle-image").show();
      $scope.show = false;
    }

    $scope.$apply(function(){});
  });
})
;
