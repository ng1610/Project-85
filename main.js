canvas= document.getElementById("my_canvas");
ctx= canvas.getContext("2d");

car1_width=120;
car1_height=70;
car1_x=10;
car1_y=10;
car1_image="car1.png";

car2_width=120;
car2_height=70;
car2_x=10;
car2_y=100;
car2_image="car2.png";

background_image="race.jpg";

function add(e){
background_imgTag= new Image();
background_imgTag.onload= uploadBackground;
background_imgTag.src= background_image;

car1_imgTag= new Image();
car1_imgTag.onload= uploadCar1;
car1_imgTag.src= car1_image;

car2_imgTag= new Image();
car2_imgTag.onload= uploadCar2;
car2_imgTag.src= car2_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
};

function uploadCar1(){
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
};

function uploadCar2(){
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
};

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    console.log("keydown");
    keypressed=e.keyCode;
    console.log(keypressed);

    if(keypressed=="38"){
        car1_up();
        console.log("up arrow key");
    }

    if(keypressed=="40"){
        car1_down();
        console.log("down arrow key");
    }

    if(keypressed=="37"){
        car1_left();
        console.log("left arrow key");
    }

    if(keypressed=="39"){
        car1_right();
        console.log("right arrow key");
    }

    if(keypressed=="87"){
        car2_up();
        console.log("w");
    }

    if(keypressed=="83"){
        car2_down();
        console.log("s");
    }

    if(keypressed=="65"){
        car2_left();
        console.log("a");
    }

    if(keypressed=="68"){
        car2_right();
        console.log("s");
    }
}

function car1_up(){
    if (car1_y>=0){
        car1_y=car1_y- 10;
        console.log("When up arrow is pressed, x= " + car1_x + " y= " + car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function car1_down(){
    if (car1_y<=530){
        car1_y=car1_y+ 10;
        console.log("When up arrow is pressed, x= " + car1_x + " y= " + car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function car1_left(){
    if (car1_x>=0){
        car1_x=car1_x- 10;
        console.log("When up arrow is pressed, x= " + car1_x + " y= " + car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function car1_right(){
    if (car1_x<=680){
        car1_x=car1_x+ 10;
        console.log("When up arrow is pressed, x= " + car1_x + " y= " + car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }

    if (car1_x>680){
        console.log("car 1 won!");
        document.getElementById("Game_status").innerHTML="Car 1 has won!";
    };
}

function car2_up(){
    if (car2_y>=80){
        car2_y=car2_y- 10;
        console.log("When up arrow is pressed, x= " + car2_x + " y= " + car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function car2_down(){
    if (car2_y<=530){
        car2_y=car2_y+ 10;
        console.log("When up arrow is pressed, x= " + car2_x + " y= " + car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function car2_left(){
    if (car2_x>=0){
        car2_x=car2_x- 10;
        console.log("When up arrow is pressed, x= " + car2_x + " y= " + car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function car2_right(){
    if (car2_x<=680){
        car2_x=car2_x+ 10;
        console.log("When up arrow is pressed, x= " + car2_x + " y= " + car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }

    if (car2_x>680){
        console.log("car 2 won!");
        document.getElementById("Game_status").innerHTML="Car 2 has won!";
    };
}


