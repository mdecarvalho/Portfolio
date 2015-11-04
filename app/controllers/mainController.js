// Michael De Carvalho
'use strict';

app

.controller('mainController', function($scope){

})

.controller('toggleController', function($scope){
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

    $scope.$apply(function(){

    });
  });
})

.controller("workController", function($scope){
    $scope.works = [
        {
        name: "dolead",
        languages: ["toto", "tutu", "titi", "tata"],
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: "images/hs.png",
        },
    ];
})
;
