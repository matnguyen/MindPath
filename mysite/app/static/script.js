var NUM_PEOPLE = 10;

// Generates a <div> DOM object that represents an avatar_other.
function createAvatarOther() {
    var obj = $("<div class='avatar-other'></div>");
    $('#avatar-others').append(obj);
}

function getNumOthers() {
    return NUM_PEOPLE;
}

$(function() {
    // Create avatars for each other person
    var numOthers = getNumOthers();
    for (var i = 0; i < numOthers; i++) {
        createAvatarOther();
    }

});


// Do we create an object? or do we create a javascript variable?