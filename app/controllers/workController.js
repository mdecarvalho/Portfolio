// Michael De Carvalho
'use strict';

app
.controller("workController", function($scope){
    $scope.works = [
        {
        name: "Pizza company web site",
        technologies: ["Php5", "Html4","CSS2", "JavaScript", "Jquery"],
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: "",
        },
        {
        name: "Dolead Campaign Manager",
        technologies: ["Python", "Html5", "CSS3", "JavaScript", "Jquery", "Jinja 2"],
        description: "During an internship in the Dolead company, I participated in the development of the Dolead Campaign Manager in the front-end team, using the Scrum methodology. The application allowed to manage and optimize AdWords and Bing campaigns.",
        image: "images/dolead.jpg",
        },
        {
        name: "Project Chat",
        technologies: ["Php", "Html5","CSS3", "JavaScript", "Jquery", "Ajax"],
        description: "This project was realized in a group and we organized the work according to the scrum method. We also used Trello to organise the various tasks of the project. Furthermore I was the lead developer because I had more experience on the procedural development Php than my colleagues.",
        image: "images/chat.jpg",
        },{
        name: "Project Super Mario Bros ",
        technologies: ["Html5","CSS3", "JavaScript", "Jquery"],
        description: "It was a three days project, we had to allow the user to move Mario in three direction, forward, backward and upward.  But I continue to improve this mini game by bringing new improvements, such as colisions and many other things...",
        image: "images/mario.jpg",
        },
        {
        name: "Development of new modules for Drupal 7",
        technologies: ["Drupal 7", "Php5"],
        description: "",
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
