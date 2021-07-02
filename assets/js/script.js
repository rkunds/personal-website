var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    delay: 50,
    loop: true
});

typewriter.typeString("how's it going!")
    .pauseFor(1500)
    .deleteAll()
    .typeString("i love to swim.")
    .pauseFor(1000)
    .deleteChars(5)
    .typeString("rock climb.")
    .pauseFor(1000)
    .deleteChars(11)
    .typeString("eat sushi :D")
    .pauseFor(1000)
    .deleteChars(12)
    .typeString("drink boba :)")
    .pauseFor(1000)
    .deleteChars(13)
    .typeString("code.")
    .pauseFor(1000)
    .deleteChars(1)
    .typeString(" (sometimes).")
    .pauseFor(1500)
    .deleteAll()
    .typeString("i am studying science computer.")
    .pauseFor(1500)
    .deleteChars(26)
    .typeString("trying to study computer science.")
    .pauseFor(1000)
    .deleteAll()
    .typeString("oh, and don't forget to stay hydrated!")
    .pauseFor(1500)
    .start()
//hide and unhide navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("nav").style.top = "0";
    } else {
        document.getElementById("nav").style.top = "-300px";
    }
}

//Writing
