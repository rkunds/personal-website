var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    delay: 50,
});

typewriter.typeString("how's it going!")
    .pauseFor(1500)
    .deleteAll()
    .typeString("i love to swim.")
    .pauseFor(1000)
    .deleteChars(5)
    .typeString("drink boba :)")
    .pauseFor(1000)
    .deleteChars(13)
    .typeString("code.")
    .pauseFor(1000)
    .deleteChars(1)
    .typeString(" (sometimes).")
    .pauseFor(1500)
    .deleteAll()
    .typeString("oh, and don't forget to stay hydrated!")
    .pauseFor(10000)
    .deleteAll()
    .typeString("there's nothing to see after this, you can scroll now!")
    .pauseFor(10000) 
    .deleteAll()
    .typeString("ok, that was a lie. there's nothing after this tho :P")    .start()
//hide and unhide navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("nav").style.top = "0";
    } else {
        document.getElementById("nav").style.top = "-300px";
    }
}