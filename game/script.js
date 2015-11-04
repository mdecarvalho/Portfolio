$(document).ready(function(){
    $(".game-container").hide();
    $(".introduction-game").click(function(){
        $(".introduction-game").hide();
        $(".game-container").removeData();
        $(".game-container").show();
        var timer = setInterval(function() {
           $('.timer').text("TIME: " + sec--);
           if (sec == -1) {
              $('.timer').fadeOut('fast');
              clearInterval(timer);
           }
        }, 1000);

        setTimeout(hurrySound, (sec-19)*1000);
        setTimeout(death, (sec+1)*1000);
        game();
    });
});
