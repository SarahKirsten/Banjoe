//This is the object that controls the behavior of our player character
var Banjoe = {

    //Direction will be a boolean, true for right, false for left
    direction : true,
    x_position : 0,
    y_position : 0,
    y_velocity : 20,
    speed : -10,
    gifs : ["images/BanjoGuyRunning.gif", "images/BanjoGuyRunningLeft.gif", "images/BanjoGuyJump.gif", "images/BanjoGuyJumpLeft.gif"],
    $images : null,
 
    // initializes our character object
    init : function(){
        this.$images = $.preload(this.gifs);
        $("div#Banjoe").empty().append(this.$images[0]);
    },

    //These methods will control the direction of our character
    goRight : function(){
        if(this.direction === true){
            return;
        }
        $("div#Banjoe").empty().append(this.$images[0]);
        this.direction = true;
    },
    goLeft : function(){
        if(this.direction === false){
            return;
        }
        $("div#Banjoe").empty().append(this.$images[1]);
        this.direction = false;
    },

    //Handles character jumps
    jump : function(){
        if(this.direction === true){
            $("div#Banjoe").empty().append(this.$images[2]);
            while(this.y_position <= this.y_velocity){
                
            }
        }
        if(this.direction === false){
            $("div#Banjoe").empty().append(this.$images[3]);
        }
    }

}

$(document).ready(function () {
    Banjoe.init();
});


//This controls user input
// WASD control
//https://www.w3schools.com/jsref/event_key_keycode.asp
//https://keycode.info/
window.addEventListener("keypress", function(){
    if(event.key === "a"){
        Banjoe.goLeft();
    }
    else if(event.key === "d"){
        Banjoe.goRight();
    }
    else if(event.key === "w"){
        Banjoe.jump();
    }
});

//Preloads an array of images into a jQuery object
//from Kent Jones' Coyote example
$.preload = function( arr ) {
    return $.map(arr, function( val ){
        var $img = $('<img/>');
        $img[0].src = val;
        return $img[0];
    });
}