$(document).ready(function() {

    $("#up").click(function() {
        $("#o0").animate(
            {height:'150', 
            width: '150'
        })
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