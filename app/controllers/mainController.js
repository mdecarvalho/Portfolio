// Michael De Carvalho
'use strict';

app

.controller('mainController', function($scope){
    $scope.works = [{
    title: 'Dolead Campaign Manager',
    description:'',
    techno:'Python, Flask, Jinga2, Html5, CSS3',
    },
    {
    title: 'Mario Bros',
    description:'',
    techno:'JavaScript',
    },
    {
    title: 'Chat',
    description:'',
    techno:'Php,Html,JavaScript,JQuery,Ajax',
    },
    {
    title: 'Map Website',
    description:'',
    techno:'Php, Drupal 7',
    }];
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
;
