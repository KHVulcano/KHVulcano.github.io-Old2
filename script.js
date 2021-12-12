let title = "Vulcano";

function setBackground(color) {
    document.body.style.setProperty("background-color", color);
}

function onLoad() {
    var buttons = document.getElementsByClassName("header");
    let buttonSize = 100/buttons.length + "%";
    for(var i = 0; i < buttons.length; i++) {
        buttons[i].style.setProperty("width", buttonSize);
    }

    var bodies = document.getElementsByClassName("body");
    for(var i = 0; i < bodies.length; i++) {
        bodies[i].innerHTML = "<h1>" + bodies[i].id + "</h1>" + bodies[i].innerHTML;
    }


    setBody('Home');
}

function setBody(body) {
    var bodies = document.getElementsByClassName("body");
    for(var i = 0; i < bodies.length; i++) {
        if(bodies[i].id == body) {
            bodies[i].style.setProperty("display", "block");
            console.log("Showing: " + bodies[i].id);
            document.title = title + " - " + body;
        } else {
            bodies[i].style.setProperty("display", "none");
        }
    }
}