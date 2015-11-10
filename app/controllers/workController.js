// Michael De Carvalho
'use strict';

app
.controller("workController", function($scope){
    $scope.works = [
        {
        name: "Pizza company web site",
        technologies: ["Php5", "Html4","CSS2", "JavaScript", "Jquery"],
        description: "It's my first web project, developed in binomial. The instructions were to realize a simplified management site for a pizzeria. We created a registration page , a page with the listing of produces, a promotion page, a page to personalize pizzas, a page for the product cart and a payment page.",
        image: "images/work/pizza.jpg",
        },
        {
        name: "Dolead Campaign Manager",
        technologies: ["Python", "Html5", "CSS3", "JavaScript", "Jquery", "Jinja 2"],
        description: "During an internship in the Dolead company, I participated in the development of the Dolead Campaign Manager in the front-end team, using the Scrum methodology. The application allowed to manage and optimize AdWords and Bing campaigns.",
        image: "images/work/dolead.jpg",
        },
        {
        name: "Project Chat",
        technologies: ["Php", "Html5","CSS3", "JavaScript", "Jquery", "Ajax"],
        description: "This project was realized in a group and we organized the work according to the scrum method. We also used Trello to organise the various tasks of the project. Furthermore I was the lead developer because I had more experience in Php procedural than my colleagues.",
        image: "images/work/chat.jpg",
        },{
        name: "Project Super Mario Bros ",
        technologies: ["Html5","CSS3", "JavaScript", "Jquery"],
        description: "It was a three days project, we had to allow the user to move Mario in three direction, forward, backward and upward.  But I continue to improve this mini game by bringing new improvements, such as colisions and many other things...",
        image: "images/work/mario.jpg",
        },
        {
        name: "Development of a custom module for Drupal 7",
        technologies: ["Drupal 7", "Php5"],
        description: "During my last formation, I created a new content type named map wich is composed by a map and movable flags to place on the map of different european country",
        image: "",
        },
        {
        name: "My portfolio",
        technologies: ["Html", "AngularJs", "JavaScript","Php5"],
        description: "I decided to develop my portfolio with AngularJs to improve my AngularJs skills and because I wanted to realize a One Page website.",
        },
    ];
})
;
