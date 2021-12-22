$(function(){
    $(".front").on("click", function(){
        $("#about").stop().fadeToggle(100);
    });
    $("#about").on("click", function(){
        $(this).stop().fadeToggle(100);
    });
});

$(function(){
    $(".back").on("click", function(){
        $("#memory").stop().fadeToggle(100);
    });
    $("#memory").on("click", function(){
        $(this).stop().fadeToggle(100);
    });
});

$(function(){
    $(".top").on("click", function(){
        $("#backtm").stop().fadeToggle(100);
    });
    $("#backtm").on("click", function(){
        $(this).stop().fadeToggle(100);
    });
});

$(function(){
    $(".bottom").on("click", function(){
        $("#works").stop().fadeToggle(100);
    });
    $("#works").on("click", function(){
        $(this).stop().fadeToggle(100);
    });
});

$(function(){
    $(".left").on("click", function(){
        $("#member").stop().fadeToggle(100);
    });
    $("#member").on("click", function(){
        $(this).stop().fadeToggle(100);
    });
});