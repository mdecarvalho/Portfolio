// Michael De Carvalho
'use strict';

app
.controller("aboutmeController", function($scope){
    $scope.songs = [
     {
         title: "LATCH",
         artiste: "Disclosure & Sam Smith",
         image: "images/songs/latch.jpg",
         link:"https://www.youtube.com/watch?v=93ASUImTedo",
     },
     {
         title: "LONELY DAY",
         artiste: "System of a Down",
         image: "images/songs/lonelyday.jpg",
         link:"https://www.youtube.com/watch?v=DnGdoEa1tPg",
     },
     {
         title: "WE CAN MAKE THE WORLD STOP",
         artiste: "The Glitch Mob",
         image: "images/songs/worldstop.png",
         link:"https://www.youtube.com/watch?v=H-k_Eg7zXuc",
     },
     {
         title: "DEREZZED",
         artiste: "Daft punk",
         image: "images/songs/derezzed.jpg",
         link:"https://www.youtube.com/watch?v=m4cgLL8JaVI",
     },
    ];
    $scope.movies = [
     {
         title: "THE PRESTIGE",
         image: "images/movies/theprestige.jpg",
         link:"https://www.youtube.com/watch?v=ijXruSzfGEc",
     },
     {
         title: "GLADIATOR",
         image: "images/movies/gladiator.jpg",
         link:"https://www.youtube.com/watch?v=ol67qo3WhJk",
     },
     {
         title: "PULP FICTION",
         image: "images/movies/pulpfiction.jpg",
         link:"https://www.youtube.com/watch?v=tGpTpVyI_OQ",
     },
     {
         title: "INTERSTELLAR",
         image: "images/movies/Interstellar.jpg",
         link:"https://www.youtube.com/watch?v=LY19rHKAaAg",
     },
    ];
})
;
