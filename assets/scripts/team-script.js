$(document).ready(function() {

    $("#lac").click(function() {
        $("#player-name h1").text("Lacazette")
    })

    $("#down").click(function() {
        $("#o0").animate(
            {height:'120', 
            width: '120'
        })
    })

    $("#fun-fact").click(function() {
        $("#show-fact").css({opacity: 1})
    })
});