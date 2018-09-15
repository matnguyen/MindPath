var NUM_PEOPLE = 10;

// lower and upper limit for spawning avatar-others
const xMin = 100;
const xMax = 800;
const yMin = 100;
const yMax = 600;

// Get a random number between min and max, inclusive.
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generates a <div> DOM object that represents an avatar_other.
function createAvatarOther() {
    var obj = $("<div class='avatar-other'></div>");

    obj.css("position", "absolute");
    obj.css("left", getRandomInt(xMin, xMax));
    obj.css("top", getRandomInt(yMin, yMax));

    $('#avatar-others').append(obj);
}

function getNumOthers() {
    return NUM_PEOPLE;
}

// Checks what key is being pressed.
function moveSelection(e) {
    e = e || window.event;
    if (e.keyCode == 37) {
        moveLeft();
    }
    else if (e.keyCode == 39) {
        moveRight();
    }
    if (e.keyCode == 38) {
        moveUp();
    }
    else if (e.keyCode == 40) {
        moveDown();
    }
}


function moveLeft() {
    var obj = document.getElementById("avatar-self");
    obj.style.left = parseInt(obj.style.left) - 5 + 'px';
}

function moveRight() {
    var obj = document.getElementById("avatar-self");
    obj.style.left = parseInt(obj.style.left) + 5 + 'px';
}

function moveUp() {
    var obj = document.getElementById("avatar-self");
    obj.style.top = parseInt(obj.style.top) - 5 + 'px';
}

function moveDown() {
    var obj = document.getElementById("avatar-self");
    obj.style.top = parseInt(obj.style.top) + 5 + 'px';
}

function gameLoop() {
    // change position based on speed
    // moveSelection();
    // setTimeout("gameLoop()", 10);
    window.addEventListener('keydown', moveSelection);
}

$(function() {
    // Create avatars for each other person
    var numOthers = getNumOthers();
    for (var i = 0; i < numOthers; i++) {
        createAvatarOther();
    }
});


// Do we create an object? or do we create a javascript variable?