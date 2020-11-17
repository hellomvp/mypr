// var ctx = canvas.getContext("2d");
var canvas = document.querySelector("#canvas");
canvas.width = 600;
canvas.height = 600;

var data = [
    {
        x:100,
        y:100,
        r:90,
        start:0,
        end:70,
        color:"yellow"
    },
    {
        x:100,
        y:100,
        r:90,
        start:70,
        end:120,
        color:"pink"
    },
    {
        x:100,
        y:100,
        r:90,
        start:120,
        end:180,
        color:"skyblue"
    },
    {
        x:100,
        y:100,
        r:90,
        start:180,
        end:200,
        color:"orange"
    },
    {
        x:100,
        y:100,
        r:90,
        start:200,
        end:270,
        color:""
    },
    {
        x:100,
        y:100,
        r:90,
        start:270,
        end:360,
        color:"red"
    },
]
var data2 = [
    {
        startX:100,
        startY:100,
        endX:400,
        endY:400,
        lineWidth:4,
        color:"pink"
    }
]
function Draw() {
    this.ctx = canvas.getContext("2d");

    this.init();
}
Draw.prototype.init = function ( ) {
    for( var i = 0 ; i < data.length ; i++ ) {
        this.drawArc(data[i])
    }
    this.drawLine( data2[0] )
}
Draw.prototype.drawArc = function ( option ) {
    this.ctx.beginPath();
    this.ctx.fillStyle = option.color || "blue";
    this.ctx.moveTo( option.x,option.y);
    this.ctx.arc(option.x,option.y,option.r,option.start*Math.PI/180,option.end*Math.PI/180,false);
    // this.ctx.closePath();
    this.ctx.fill();
}
Draw.prototype.drawLine = function ( option ) {
    console.log( option );
    this.ctx.beginPath();
    this.ctx.lineWidth = option.lineWidth;
    this.ctx.strokeStyle = option.color || "blue";
    this.ctx.moveTo(option.startX,option.startY);
    this.ctx.lineTo(option.endX,option.endY);
    this.ctx.closePath();
    this.ctx.stroke();
}
var draw = new Draw();