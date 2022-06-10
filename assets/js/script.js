window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("nav").style.top = "0";
    } else {
        document.getElementById("nav").style.top = "-300px";
    }
}