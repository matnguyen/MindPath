var NUM_PEOPLE = 100;

// lower and upper limit for spawning avatar-others
const xMin = 100;
const xMax = 1200;
const yMin = 100;
const yMax = 600;

const colorMin = 0;
const colorMax = 4;
const colors = [
    'blueppl.svg',
    'greenppl.svg',
    'orangeppl.svg',
    'purpleppl.svg',
    'yellowppl.svg'
];

// lower and upper limit for changing speed of other avatars
const dxMin = -10;
const dxMax = 10;
const dyMin = -10;
const dyMax = 10;

const selfAvatarSpeed = 5;

var directions = {
    'left': false,
    'right': false,
    'up': false,
    'down': false
};

// Get a random number between min and max, inclusive.
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generates a <div> DOM object that represents an avatar_other.
function createAvatarOther() {

    const color = colors[getRandomInt(colorMin, colorMax)];

    var obj = $("<div class='avatar-other'></div>");
    var avatar = $("<img src='static/Assets/" + color + "'>");
    obj.css("position", "absolute");

    obj.css("left", getRandomInt(xMin, xMax));
    obj.css("top", getRandomInt(yMin, yMax));

    $('#avatar-others').append(obj);
    obj.append(avatar);
}

function getNumOthers() {
    return NUM_PEOPLE;
}


var keyDown = {
    'LEFT': false,
    'UP': false,
    'RIGHT': false,
    'DOWN': false
};

// var keyMap = {
//   'LEFT':  37,
//   'UP':    38,
//   'RIGHT': 39,
//   'DOWN':  40
// };
var keyMap = {
    37: 'LEFT',
    38: 'UP',
    39: 'RIGHT',
    40: 'DOWN'
};

$('html').keydown(function(e){ console.log(e.which); keyDown[keyMap[e.which]] = true;  });
$('html').keyup(function(e){  keyDown[keyMap[e.which]] = false; });

function moveLeft() {
    var obj = document.getElementById("avatar-self");
    obj.style.left = parseInt(obj.style.left) - selfAvatarSpeed + 'px';
}

function moveRight() {
    var obj = document.getElementById("avatar-self");
    obj.style.left = parseInt(obj.style.left) + selfAvatarSpeed + 'px';
}

function moveUp() {
    var obj = document.getElementById("avatar-self");
    obj.style.top = parseInt(obj.style.top) - selfAvatarSpeed + 'px';
}

function moveDown() {
    var obj = document.getElementById("avatar-self");
    obj.style.top = parseInt(obj.style.top) + selfAvatarSpeed + 'px';
}

var detectCharacterMovement = function(){
    // if ( keys[keys.LEFT] ) {
    //     moveLeft();
    // }
    // if ( keys[keys.RIGHT] ) {
    //     moveRight();
    // }
    // if ( keys[keys.UP] ) {
    //     moveUp();
    // }
    // if ( keys[keys.DOWN] ) {
    //     moveDown();
    // }
    if ( keyDown['LEFT']) {
        moveLeft();
    }
    if ( keyDown['RIGHT'] ) {
        moveRight();
    }
    if ( keyDown['UP'] ) {
        moveUp();
    }
    if ( keyDown['DOWN']) {
        moveDown();
    }
};

var tickrate = 30;

function gameLoop() {
    setInterval(function() {detectCharacterMovement();}, tickrate);
    // setInterval(updateOtherAvatars, tickrate2);
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
}


$(function() {
    // Create avatars for each other person
    var numOthers = getNumOthers();
    for (var i = 0; i < numOthers; i++) {
        createAvatarOther();
    }
});


// Do we create an object? or do we create a javascript variable?