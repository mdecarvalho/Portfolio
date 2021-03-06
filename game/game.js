var condition = 1; // variable use to avoid the flood
var sec = 60; //MAX time of the game
var initialPosition = 235; // initialization of the
var leftLimit = 0;
var alive = 1;
var endGame = 6525;
var coins = 0; //nupmber of coins collected

function hurrySound(){
    $("#soundtrack")[0].pause();
    $("#hurry_sound")[0].play();
    setTimeout('$("#hurry_sound")[0].pause();', 2499);
    setTimeout('$("#hurry_soundtrack")[0].play();', 2500);
}

function addCoin(){
        coins++;
        $('.coins p').text(" : " + coins);
}

function topCollision(){
        var charPos = $('.character').position();
        ok = 0;
        $('div.block').each(function(){
            if((( (charPos.top) - 135 <= ($(this).position().top + 32)) && ((charPos.left) + 23 >= $(this).position().left)) && ((charPos.left)<= $(this).position().left + 32)){
                if($(this).is( ".coin-block" )){
                    $("#coin_sound")[0].pause();
                    $("#coin_sound")[0].currentTime = 0;
                    $("#coin_sound")[0].play();
                    addCoin();
                    $(this).addClass("empty-block");
                    $(this).removeClass("coin-block");
                }
                else{
                    $("#jump_sound")[0].pause();
                    $("#bump_sound")[0].pause();
                    $("#bump_sound")[0].currentTime = 0;
                    $("#bump_sound")[0].play();
                }
                ok=$(this).position().top + 32;
            }
        });

        return ok;
}

function frontCollision(){
    var charPos = $('.character').position();
    var ok = 0;
    $('div.pipe').each(function(){
        if(((charPos.left) + 23 >= $(this).position().left) && ((charPos.left)<= $(this).position().left + 64)){
            ok = 1;
        }
    });
    return ok;
}

function backCollision(){
    var charPos = $('.character').position();
    var ok = 0;
    $('div.pipe').each(function(){
        if(((charPos.left)<= $(this).position().left + 64 ) && ((charPos.left + 28)>= $(this).position().left)){
            ok = 1;
        }
    });
    return ok;
}

function forward(condition){
    if(condition == 1){
        $(".character img").attr('src', 'images/game/Mario.gif');
    }
    $(".character")
        .css({transform: 'rotateY(360deg)'})
        .animate({left: '+=5'}, 5 , "linear");
    if($('.character').position().left >= endGame){
        win();
    }
    if ($('.character').position().left >235) {
        leftLimit = $('.character').position().left - 235;
    }

}

function backward(condition, charPos){
    if(condition == 1){
        $(".character img").attr('src', 'images/game/Mario.gif');
    }
    if($('.character').position().left > initialPosition){
        initialPosition = $('.character').position().left;
    }

     if(charPos.left > 0 ){
         $(".character")
            .attr('src','images/game/Mario.gif')
            .css({transform: 'rotateY(180deg)'})
            .animate({left: '-=5'}, 5, "linear");
     }
}

function jump(condition){
    var jumpHeight = 135;
    if(condition == 1){
        $(".character img").attr('src', 'images/game/MarioJumping.png');
        $("#jump_sound")[0].pause();
        $("#jump_sound")[0].currentTime = 0;
        $("#jump_sound")[0].play();
        var temp = 370 - topCollision();
        if(temp < jumpHeight && temp != 0){
            jumpHeight=temp;
        }

        $(".character").animate({"top": "-="+ jumpHeight}, 200, "linear");
        $(".character").animate({"top": "+="+jumpHeight}, 200, "linear");

        setTimeout('$(".character img").attr("src", "images/game/MarioStanding.jpg")',200);
    }
}

function death(){
        alive = 0;
        $("#soundtrack").remove();
        $("#hurry_soundtrack").remove();
        $("#jump_sound").remove();
        $("#death_sound")[0].play();
        $(".gameOver").show();
        $(".character img").attr('src', 'images/game/MarioDeath.png');
        $(".character").animate({"top": "-=10%"}, 1000, "linear");
        $(".character").animate({"top": "+=100%"}, 1000, "linear");
        setTimeout('$(".character").remove()', 2000);
        $(".timer").hide();
        $(".coins").hide();
        $("character").remove();
}

function win(){
    $("#jump_sound").remove();
    $("#soundtrack")[0].remove();
    $("#hurry_soundtrack").remove();
    $("#ending_sound")[0].play();
    $(".character").hide();
    $("character").remove();
    $("#death_sound").remove();
    $(".win").show();
    $(".timer").hide();
    $(".coins").hide();
}

function game(){
    $("#soundtrack")[0].play();
    $(document).keydown(function(event){
      if(event.keyCode == 38 || event.keyCode == 40){
        event.preventDefault();
      }
        var charPos= $('.character').position();
        if (event.keyCode == '39') {
            if(true){
                if(charPos.left >= leftLimit && charPos.left <= initialPosition && charPos.left <= endGame){
                    forward(condition);
                }
                else{
                    // défilement du background au lieu du personnage lorsqu'il arrive au centre de l'écran
                    if(charPos.left != 0 && charPos.left < endGame && alive == 1){
                        $("#background").animate({left:'-=5'},1);

                    }
                    forward(condition);
                    if( condition == 1){
                        $(".character img").attr('src', 'images/game/Mario.gif');
                    }
                }
            }
        }

        if (event.keyCode == '37') {
            if(true){
                if (charPos.left > leftLimit + 5) {
                    backward(condition, charPos);
                }
           }
        }

        if (event.keyCode == '38'){
            jump(condition);
        }
        condition = 0;

    })

    //gestion de la fin de déplacement
    $(document).keyup(function(event){
        if (event.keyCode == '39') {
           $(".character img").attr('src', 'images/game/MarioStanding.jpg');
        }

        if (event.keyCode == '37') {
            $(".character img")
           .attr('src', 'images/game/MarioStanding.jpg');
        }
        condition = 1;
    })
}
