let myX = 225;
let myY = 225;
let s = 1;
let score = 0;
let level_1 = true;
let coinX = 650;
let coinY = 500;
let game = 0;


//hi, the s is the speed variable that I am going to try out. 

function setup() {
    createCanvas(800, 800);
    background(0);  
    fill(0,255,0);
    rect(350, 375,100,50);
    fill(255);
    
    text("START GAME",362.5,400);

    text("Use arrows to move, shift to sprint", 305,500);
}

function mouseClicked() {
    if (mouseX >= 350 && mouseX <= 450 && mouseY >= 375 && mouseY <= 425) {
        game = 1;
    }
}



function draw() {
    if (game == 1) {
        
         
    

        background(0);
        fill(0,255,255);
        rect(10, 10, 10 + score, 20);
        if (score == 100) {
            fill(random(0,255),random(0,255),random(0,255));
            text('YOU WIN',400,400);
            s = 0;
        }
        if (keyIsDown(LEFT_ARROW) && myX > 0) {
            myX -= 5 * s;
        }
        else {
            myX -= 0;
        }
        if (keyIsDown(RIGHT_ARROW) && myX <= 750) {
            myX += 5 * s;
        }
        else {
            myX += 0;
        }

        if (keyIsDown(UP_ARROW) && myY > 0) {
            myY -= 5 * s;
        }
        else {
            myY -= 0;
        }

        if (keyIsDown(DOWN_ARROW) && myY <= 750) {
            myY += 5 * s;
        }
        else {
            myY += 0;
        }

        if (keyIsDown(16)) {
            s = 2;
        }
        else {
            s = 1;
        }
        
        fill(255,255,0);
        ellipse(coinX,coinY,50,50);
        fill(217, 135, 35);
        ellipse(coinX,coinY,25,25);
        textSize(15);
        fill(0,255,0);
        text('$',coinX-4,coinY+5);
        fill(255, 0, 0);
        rect(myX, myY, 45, 45);

        
        if (myX + 45 >= coinX - 25 && coinX + 25 >= myX && myY + 45 >= coinY - 25 && coinY + 25 >= myY) {
            coinX = random(25,775);
            coinY = random(25,775);
            score += 10;
        }






    }
    
    


} 
