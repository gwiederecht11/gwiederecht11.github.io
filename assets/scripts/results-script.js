
// /**
//  * 
//  *
//  * @param {string} color 
//  */


// function setBackgroundColor(color) {
//     console.log('should be changing');
//     document.getElementsByClassName("result-border").style.backgroundColor = color;
// }

// function changeToBlue() {
//     setBackgroundColor('#0000FF');
// }


// document.getElementsByClassName("child left-child opp").onclick = changeToBlue;

$(document).ready(function() {

    $(".opp").click(function() {
        $(".result-border").css("background-color", "#4337e9a2");
    })

    $(".home").click(function() {
        $(".result-border").css("background-color", "#e93737a2");
    })

});

