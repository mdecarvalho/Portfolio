// Michael De Carvalho
'use strict';
var app = angular.module('mdcApp',['ngRoute'])

.config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'app/views/home.html',
        controller: 'homeController'
    })

    .when('/work', {
        templateUrl: 'app/views/work.html',
        controller: 'workController',
    })

    .when('/aboutme', {
        templateUrl: 'app/views/aboutme.html',
        controller: 'aboutMeController'
    })

    .when('/contactme', {
        templateUrl: 'app/views/contactme.html',
        controller: 'contactMeController'
    })

    .otherwise({
        redirectTo: '/'
    });
})
;
