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

var keyMap = {
    37: 'LEFT',
    38: 'UP',
    39: 'RIGHT',
    40: 'DOWN'
};

$('html').keydown(function(e){
    if (e.which === 13) {
        checkCollision();
    }
    keyDown[keyMap[e.which]] = true;
});

$('html').keyup(function(e){  keyDown[keyMap[e.which]] = false; });

function collision($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = $div1.outerHeight(true);
      var w1 = $div1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 = $div2.outerHeight(true);
      var w2 = $div2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;

      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
      return true;
}



function checkCollision() {

    var $avatar = $('#avatar-self');
    var $clinic = $('#clinic');
    var $callCentres = $('#call-centres');
    var $apps = $('#apps');
    var $about = $('#about');
    var $settings = $('#settings');
    var buildings = [$clinic, $apps, $callCentres, $about, $settings];

    var i;
    for (i = 0; i < buildings.length; i++) {
        console.log($(buildings[i]));
        var collides = collision($avatar, buildings[i]);
        if (collides) {
            break;
        }
    }

    var $collidedBuilding = buildings[i];

    // get building's parent
    var href = $collidedBuilding.parent().attr('href');

    window.location.href = href;
    // if avatar-self collides with clinic, apps, call-centres, about, settings:
        // get parent
    // go that lik
}

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
    setInterval(function() {detectCharacterMovement(); }, tickrate);
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

    });
}


// code for if you click on a website icon, it will pop open a div
// and describe the website

$(".phone-icon").click(function(){
    $("#info").show();
});

// TODO : if you click outside then hide #info
$(".outside").click(function() {
    $("#info").hide();
});

$(function() {
    // Create avatars for each other person
    var numOthers = getNumOthers();
    for (var i = 0; i < numOthers; i++) {
        createAvatarOther();
    }
});


// Do we create an object? or do we create a javascript variable?