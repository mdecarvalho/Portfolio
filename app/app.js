// Michael De Carvalho
'use strict';
var app = angular.module('mdcApp',['ngRoute'])

.config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'app/views/home.html',
        controller: 'mainController',
    })

    .when('/work', {
        templateUrl: 'app/views/work.html',
        controller: 'workController',
    })

    .when('/aboutme', {
        templateUrl: 'app/views/aboutme.html',
        controller: 'aboutmeController',
    })

    .when('/contactme', {
        templateUrl: 'app/views/contactme.html',
        controller: 'mainController',
    })

    .when('/bonus', {
        templateUrl: 'app/views/bonus.html',
        controller: 'mainController',
    })

    .otherwise({
        redirectTo: '/'
    });
})
;
