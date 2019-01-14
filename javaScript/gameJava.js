
$(document).ready(function(){
    BanjoeController.init();
    BanjoeController.draw();
}
);

var BanjoeController = {
    speed: 6,
    position: 0,

    init: function(){},
    
    draw: function(){
        window.setTimeout(controller.move.bind(this),25);

        $("#sky").css("background-position",this.position/12);
        $("#moon").css("background-position",this.position/6);
        $("#hills").css("background-position",this.position/3);
        $("#ground").css("background-position",this.position);

        if(this.position/12<-3000)
            this.position=0;

        this.position-=this.speed;
    }
}