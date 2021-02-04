var ball;
var db
var b
var a
function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    db=firebase.database()
    b=db.ref("ball/position")
    b.on("value",read3,showerror)

}
function read3(data){
a=data.val()
ball.x=a.x;
ball.y=a.y
}
function showerror(){
    alert("u did it")

}
function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    db.ref("ball/position").set({
"x":a.x+x,"y":a.y+y
    })
}
