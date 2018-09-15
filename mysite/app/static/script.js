var NUM_PEOPLE = 10;

// lower and upper limit for spawning avatar-others
const xMin = 100;
const xMax = 800;
const yMin = 100;
const yMax = 600;

// lower and upper limit for changing speed of other avatars
const dxMin = -10;
const dxMax = 10;
const dyMin = -10;
const dyMax = 10;

// Get a random number between min and max, inclusive.
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generates a <div> DOM object that represents an avatar_other.
function createAvatarOther() {
    var obj = $("<div class='avatar-other'></div>");
    var avatar = $("<img src='static/Assets/blueppl.svg'>");
    obj.css("position", "absolute");
    obj.css("left", getRandomInt(xMin, xMax));
    obj.css("top", getRandomInt(yMin, yMax));

    $('#avatar-others').append(obj);
    obj.append(avatar);
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
    setInterval(updateOtherAvatars, 100);
}

function updateOtherAvatars() {
    // get all the avatars
    var others = $(".avatar-other").toArray();
    others.forEach(function(other) {

        const xChange = getRandomInt(dxMin, dxMax);
        const yChange = getRandomInt(dyMin, dyMax);

        other.style.left = parseInt(other.style.left) + xChange + 'px';
        other.style.top = parseInt(other.style.top) + yChange + 'px';
        // var left = other.css('left');
        // var top = other.css('top');
        //
        // other.css('left', left+5);
        // other.css('top', top+5);
    });
    // console.log(others);
}

$(function() {
    // Create avatars for each other person
    var numOthers = getNumOthers();
    for (var i = 0; i < numOthers; i++) {
        createAvatarOther();
    }
});


// Do we create an object? or do we create a javascript variable?