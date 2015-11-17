// Michael De Carvalho
'use strict';

app
.controller("contactmeController", function($scope, $http, $interval){
    $scope.formData = {};

    // process the form
    $scope.submitForm = function () {
       $http({
           method: 'POST',
           url: 'mail.php',
           data: $.param($scope.formData),  // pass in data as strings
           headers: { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
       })
           .success(function (data) {
               console.log(data);
               if (data.success) {
                    $scope.message = data.message;
                    $interval(function(){
                        $scope.message = "";
                    },3000);
                    $scope.formData.name = "";
                    $scope.formData.mail = "";
                    $scope.formData.subject = "";
                    $scope.formData.content = "";
                    $scope.errorName = "";
                    $scope.errorMail = "";
                    $scope.errorSubject = "";
                    $scope.errorContent = "";
               }
               else {
                   $scope.errorName = data.errors.name;
                   $scope.errorMail = data.errors.mail;
                   $scope.errorSubject = data.errors.subject;
                   $scope.errorContent = data.errors.content;
                   $scope.message = "Please enter all fields";
                   $interval(function(){
                       $scope.message = "";
                   },3000);
               }
           });

    };

});
