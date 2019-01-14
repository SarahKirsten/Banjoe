//This object will control our Banjoe character 
//and our background
//Lovingly copied from Kent Jones' Coyote example
var BanjoeController = {

    $Banjoe : null,

    init : function(){
        this.$Banjoe = Object.create(Banjoe);
        this.$Banjoe.init();
    },

    draw : function(){
        requestAnimFrame(BanjoeController.draw.bind(this), 30);
        this.$Banjoe.run();
        var xpos = this.$Banjoe.x_position;
        var ypos = this.$Banjoe.y_position;
    }
}

//Blatantly stolen from Kent Jones' Coyote example
requestAnimFrame = (function(){
    if (window.requestAnimationFrame) return window.requestAnimationFrame;
    if (window.webkitRequestAnimationFrame) return window.webkitRequestAnimationFrame;
    if (window.mozRequestAnimationFrame) return window.mozRequestAnimationFrame;
    if (window.oRequestAnimationFrame) return window.oRequestAnimationFrame;
    if (window.msRequestAnimationFrame) return window.msRequestAnimationFrame;
    else return  function( callback, element ){
        window.setTimeout(callback, element);
    };
})();

window.addEventListener("keypress", function(){
    if(event.key === "a"){
        BanjoeController.$Banjoe.goLeft();
    }
    else if(event.key === "d"){
        BanjoeController.$Banjoe.goRight();
    }
    else if(event.key === "w"){
        BanjoeController.$Banjoe.jump();
    }
});

$(document).ready(function () {
    BanjoeController.init();
    BanjoeController.draw();
});
