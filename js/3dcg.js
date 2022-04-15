$(function(){
    $(".front").on("click", function(){
        $("#about").stop().fadeToggle(100);
    });
    $("#about").on("click", function(){
        $(this).stop().fadeToggle(100);
    });
    $(".back").on("click", function(){
        $("#memory").stop().fadeToggle(100);
    });
    $("#memory").on("click", function(){
        $(this).stop().fadeToggle(100);
    });
    $(".top").on("click", function(){
        $("#backtm").stop().fadeToggle(100);
    });
    $("#backtm").on("click", function(){
        $(this).stop().fadeToggle(100);
    });
    $(".bottom").on("click", function(){
        $("#works").stop().fadeToggle(100);
    });
    $("#works").on("click", function(){
        $(this).stop().fadeToggle(100);
    });
    $(".left").on("click", function(){
        $("#member").stop().fadeToggle(100);
    });
    $("#member").on("click", function(){
        $(this).stop().fadeToggle(100);
    });
    $(".right").on("click", function(){
        $("#face").stop().fadeToggle(100);
    });
    $("#face").on("click", function(){
        $(this).stop().fadeToggle(100);
    });
});