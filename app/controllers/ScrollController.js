// Michael De Carvalho
'use strict';

app
.controller('ScrollController', function ($scope, $location, $anchorScroll) {
    $scope.scrollTo = function(id) {
      // set the location.hash to the id of
      // the element you wish to scroll to.
        $location.hash(id);
      // call $anchorScroll()
      $anchorScroll();
    };
});
