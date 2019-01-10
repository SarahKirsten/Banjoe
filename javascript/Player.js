var Banjoe = {

    //Direction will be a boolean, true for right, false for left
    direction : true,
    x_position : 0,
    y_position : 0,
    speed : -10,
    gifs : ["images/BanjoGuyRunning.gif", ],
    $images : null,
 
    init : function(){
        this.$images = $.preload(this.gifs);
        $("div#Banjoe").empty().append(this.$images[0]);
    }

}

$(document).ready(function () {
    Banjoe.init();
});