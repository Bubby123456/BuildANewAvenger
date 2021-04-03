var canvas=new fabric.Canvas("myCanvas");
block_image_width=30;
block_image_height=30;
player_x=10;
player_y=10;
var player_object="";
var block_image_object="";

function player_update()
{
    fabric.Image.fromURL("player.png",function (Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);

    });
}
  function new_image(get_image)
    {
        fabric.Image.fromURL(get_image,function (Img){
            block_image_object=Img;
            block_image_object.scaleToWidth(block_image_width);
            block_image_object.scaleToHeight(block_image_height);
            block_image_object.set({
                top:player_y,
                left:player_x
            });
            canvas.add(block_image_object);
        });
    }

    window.addEventListener("keydown",my_keydown);

    function my_keydown(e) {
        keyPressed=e.keyCode;
        console.log(keyPressed);
        if (e.shiftKey==true&&keyPressed=="80") {
            block_image_height=block_image_height+10;
            block_image_width=block_image_width+10;
            console.log("Shift and P pressed together");
            document.getElementById("current_width").innerHTML=block_image_width;
            document.getElementById("current_height").innerHTML=block_image_height;
        }
        if (e.shiftKey&&keyPressed=="77") {
            block_image_width=block_image_width-10;
            block_image_height=block_image_height-10;
            console.log("Shift and M pressed together");
            document.getElementById("current_width").innerHTML=block_image_width;
            document.getElementById("current_height").innerHTML=block_image_height;
        }
        if (keyPressed=="70") {
            new_image("ironman_face.png");
            console.log("F key pressed to get the face of 'IRONMAN'");
        }
        if (keyPressed=="66") {
            new_image("spiderman_body.png");
            console.log("B key pressed to get the body of 'SPIDERMAN'");
        }
        if (keyPressed=="76") {
            new_image("hulk_legs.png");
            console.log("L key pressed to get the legs of 'HULK'");
        }
        if (keyPressed=="82") {
            new_image("thor_right_hand.png");
            console.log("R key is pressed to get the right hand of 'RIGHT HAND OF THOR '");
        }
        if (keyPressed=="72") {
            new_image("captain_america_left_hand.png");
            console.log("H key pressed to get the left hand of 'CAPTAIN AMERICA'");
        }
        if (keyPressed=="38") {
            up();
            console.log("Up arrow key pressed");
        }
        if (keyPressed=="40") {
           down();
           console.log('Down arrow key pressed'); 
        }
        if (keyPressed=="37") {
            left();
            console.log("Left arrow key pressed");
        }
        if (keyPressed=="39") {
            right();
            console.log("Righr arrow key pressed");
        }
    }

    function up() {
        if (player_y>=0) {
            player_y=player_y-block_image_height;
            console.log("BLOCK IMAGE HEIGHT = "+block_image_height);
            console.log("When 'UP' arrow key is pressed, X ="+player_x+" , Y ="+player_y);
            canvas.remove(player_object);
            player_update();
        }
    }
    function down() {
        if (player_y<=700) {
           player_y=player_y+block_image_height;
           console.log("BLOCK IMAGE HEIGHT ="+block_image_height);
           console.log("When down arrow key is pressed, X ="+player_x+", Y ="+player_y);
           canvas.remove(player_object);
           player_update(); 
        }
    }
    function left() {
        if (player_x>=0) {
            player_x=player_x-block_image_width;
            console.log("BLOCK IMAGE WIDTH ="+block_image_width);
            console.log("When left arrow key is pressed, X ="+player_x+", Y"+player_y);
            canvas.remove(player_object);
            player_update();
        }
    }
    function right() {
        if (player_x<=900) {
            player_x=player_x+block_image_width;
            console.log("BLOCK IMAGE WIDTH ="+block_image_width);
            console.log("When right arrow key is pressed, X ="+player_x+", Y"+player_y);
            canvas.remove(player_object);
            player_update();
        }
    }