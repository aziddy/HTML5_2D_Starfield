

//Timer
var start = new Date().getTime(),
    time = 0,
    elapsed = '0.0';
function instance()
{
    time += 100; //Add 100 to time
    elapsed = Math.floor(time / 100) / 10; //Put elapsed to seconds Ex: 0.1, 0.2, 0.3
    if(Math.round(elapsed) == elapsed) { elapsed += '.0'; }
    var diff = (new Date().getTime() - start) - time;
    window.setTimeout(instance, (100 - diff));
}
window.setTimeout(instance, 100);







//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////




function woop() {


var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 900;
canvas.height = 552;
document.body.appendChild(canvas);

var keysDown = {};
window.addEventListener('keydown', function(e) {
    keysDown[e.keyCode] = true;
});
window.addEventListener('keyup', function(e) {
    delete keysDown[e.keyCode];
});
 
 
var game = {
    images: 0,
    imagesLoaded: 0,
    backgroundColor: '#000'
}

 function update(mod) {

 if (playerdead = 0){
canvas.width = 0;
canvas.height = 0;
}

// If any letters (A-Z) are pressed the game restarts on the fail screen

 }
 
 
 
function render() {
    
    	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}
    
    ctx.fillStyle = '#fff';
    ctx.font = '30pt Arial';
    ctx.textBaseline = 'top'; 
    //ctx.fillText('Arrow keys to move left and right and space bar to shoot' , 70, 15);
    ctx.fillText('Hit any letter between A-Z to restart!', 120, 200);   
    ctx.fillText('TIP: Dodge them squares!. ', 200, 350);

 }
    


 
function main() {
    var now = Date.now();
	var delta = now - then;
    update(delta / 1000);
    render();

    then = now;
}
 
var then = Date.now();
setInterval(main, 1);

//if (elapsed == '60.0')
//canvas.width = 0;
//canvas.height = 0;
//}

}






//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////





var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
document.body.appendChild(canvas);
 
  // Alien image
var alienReady = false;
var alienImage = new Image();
alienImage.onload = function () {
	alienReady = true;
};
alienImage.src = "images/alien.png";

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/bg.png";


var alien = {  // A.I alien
    x: 300,
    y: 300,
    speed: 150 // movement in pixels per second
};

var rightwall = {
     x: 899,
     y: 0
};
   
var leftwall = {
     x: 0,
     y: 0
};

var playerdead = 0;


 
function imageLoaded() {
    game.imagesLoaded ++;
}
 
function Tileset(image, tileWidth, tileHeight) {
    this.image = new Image();
    game.images ++;
    this.image.onload = imageLoaded;
    this.image.src = image;
    this.tileWidth = tileWidth;
    this.tileHeight = tileHeight;
}
 
function Animation(tileset, frames, frameDuration) {
    this.tileset = tileset;
    this.frames = frames;
    this.currentFrame = 0;
    this.frameTimer = Date.now();
    this.frameDuration = frameDuration;
}
 
function Sprite(stateAnimations, startingState, x, y, width, height, speed) {
    this.stateAnimations = stateAnimations;
    this.currentState = startingState;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
}

//////////////////////////////////////////
///////////Start of Alien Code////////////
//////////////////////////////////////////
function aenemy(x, y, trajectory, size, color, speed) {
    this.x = x;
    this.y = y;
    this.trajectory = trajectory;
    this.size = size;
    this.color = color;
    this.speed = speed;
}


function drawSquare(x, y, size, sizey, color) {
    ctx.fillStyle = color;
    ctx.fillRect(Math.round(x), Math.round(y), size, sizey);
}

var enemyY = 0;
var enemyX = canvas.width-1;
var enemystart = 2;

function updateProjectiles(mod) {
    for (var key in enemy) {
            enemy[key].x += enemy[key].trajectory.x * enemy[key].speed * mod;
        enemy[key].y += enemy[key].trajectory.y * enemy[key].speed * mod;
        if (enemy[key].x > canvas.width || enemy[key].x < 0 || enemy[key].y > (canvas.height + 40) || enemy[key].y < 0) {
            enemy.splice(key, 1);
            
            
        }


    }
}

function Trajectoryenemy(startX, startY, endX, endY) {
    this.length = Math.sqrt(Math.pow((endX - startX), 2) + Math.pow((endY - startY), 2));
    this.x = (endX - startX) / this.length;
    this.y = (endY - startY) / this.length;
}




//////////////////////////////////////////		
////////////End of Alien Code/////////////
//////////////////////////////////////////

 
//function Projectile(x, y, trajectory, size, color, speed) {
//   this.x = x;
//    this.y = y;
//    this.trajectory = trajectory;
//    this.size = size;
//   this.color = color;
//    this.speed = speed;
//}
 
//function Trajectory(startX, startY, endX, endY) {
//    this.length = Math.sqrt(Math.pow((endX - startX), 2) + Math.pow((endY - startY), 2));
//    this.x = (endX - startX) / this.length;
//   this.y = (endY - startY) / this.length;
//}
 

//function drawSquare(x, y, size, color) {
//    ctx.fillStyle = color;
//    ctx.fillRect(Math.round(x), Math.round(y), size, size);
//}
 
//function updateProjectiles(mod) {
//    for (var key in projectiles) {
//    score =+ ((aliensk * 500) + (ammo * -200));
//        projectiles[key].x += projectiles[key].trajectory.x * projectiles[key].speed * mod;
//        projectiles[key].y += projectiles[key].trajectory.y * projectiles[key].speed * mod;
//        if (projectiles[key].x > canvas.width || projectiles[key].x < 0 || projectiles[key].y > (canvas.height + 40) || projectiles[key].y < 40) {
//           projectiles.splice(key, 1);
//            
//        }
//           		if (
//		alien.x <= (projectiles[key].x + 6)
//		&& projectiles[key].x <= (alien.x + 60)
//		&& alien.y <= (projectiles[key].y + 0)
//		&& projectiles[key].y <= (alien.y + 40)
//	) {
//			alien.x = 32 + (Math.random() * (canvas.width - 80));
//	        alien.y = 32 + (Math.random() * (canvas.height - 64));
//	        projectiles.splice(key, 1);
//	        aliensk++;
//	score =+ ((aliensk * 500) + (ammo * -200));
//	        
//
//
//	}
//
//  }
//}

var aliensk = 0;
var score = 0;
function drawSprite(sprite) {
    ctx.drawImage(
        sprite.stateAnimations[sprite.currentState].tileset.image, 
        sprite.stateAnimations[sprite.currentState].frames[sprite.stateAnimations[sprite.currentState].currentFrame].split(',')[0] * sprite.stateAnimations[sprite.currentState].tileset.tileWidth,
        sprite.stateAnimations[sprite.currentState].frames[sprite.stateAnimations[sprite.currentState].currentFrame].split(',')[1] * sprite.stateAnimations[sprite.currentState].tileset.tileHeight,
        sprite.stateAnimations[sprite.currentState].tileset.tileWidth,
        sprite.stateAnimations[sprite.currentState].tileset.tileHeight,
        Math.round(sprite.x),
        Math.round(sprite.y),
        sprite.width,
        sprite.height
    );
}
 
function updateAnimation(anim) {
    if (Date.now() - anim.frameTimer > anim.frameDuration) {
        if (anim.currentFrame < anim.frames.length - 1) anim.currentFrame ++;
        else anim.currentFrame = 0;
        anim.frameTimer = Date.now();
    }
}
 
var game = {
    images: 0,
    imagesLoaded: 0,
    backgroundColor: '#000'
}

/*
var spriteTileStand = new Tileset('images/stand.png', 52, 116);
var spriteStand = new Animation(spriteTileStand, ['0,0', '1,0', '2,0', '3,0'], 50);
 
 
var spriteTiles = new Tileset('images/sprite.png', 44, 108);
var spriteLeftAnim = new Animation(spriteTiles, ['3,0', '2,0', '1,0', '0,0'], 125);
var spriteRightAnim = new Animation(spriteTiles, ['0,1', '1,1', '2,1', '3,1'], 125);
var player = new Sprite({'stand': spriteStand, 'left': spriteLeftAnim, 'right': spriteRightAnim}, 'stand', canvas.width / 4, canvas.height / 2.5, 44, 108,  50); */

var spriteTileStand = new Tileset('', 44, 44);
var spriteStand = new Animation(spriteTileStand, ['0,0'], 350);
 
 
var player = new Sprite({'stand': spriteStand}, 'stand', canvas.width / 4, canvas.height / 2.5, 44, 44,  50);
//                                                                                                                              ^                  ^   ^   ^        ^
//                                                                                                                       starting x             |   |   height y |
//                                                                                                                                     starting y   width        speed x

var keysDown = {};
window.addEventListener('keydown', function(e) {
    keysDown[e.keyCode] = true;
});
window.addEventListener('keyup', function(e) {
    delete keysDown[e.keyCode];
});
 
 var mouse = {
    x: 0,
    y: 0,
    down: false
}

player.projectileTimer = Date.now();
player.shootDelay = 50;
//var projectiles = [];

var enemy = [];

var ammo = 0;
  
var jumpgravity=0;

function update(mod) {
   canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
  
        enemyX = canvas.width-1;

		


 if (playerdead){

 playerdead = 0;
canvas.width = 0;
canvas.height = 0;
woop();
scores = score;
}

     player.currentState = 'stand';
 updateAnimation(player.stateAnimations[player.currentState]);




// if (mouse.down && Date.now() - player.projectileTimer > player.shootDelay) {
//        if (ammo > -1){
//        ammo++,
//        
//        projectiles.push(
//            new Projectile(
//                player.x + player.width / 2.5,
//               player.y + 15,
//                new Trajectory(player.x + player.width / 2, player.y + 15, mouse.x, mouse.y),
//                10,
//                '#0f0',
//                700
//            )
//        );
//        player.projectileTimer = Date.now();
//        }
// } 

var rain = true;

     if (rain && Date.now() - player.projectileTimer > player.shootDelay) {
        if (ammo > -1){
        ammo+=4,
        enemyY = (Math.random() * (canvas.height));
        
        enemy.push(
            new aenemy(
                enemyX,
                enemyY,
                new Trajectoryenemy(enemyX, enemyY, enemyX-1, enemyY),
                30,
                '#fff',
                1000
            )
        );
        player.projectileTimer = Date.now();

		        enemy.push(
            new aenemy(
                enemyX,
                enemyY,
                new Trajectoryenemy(enemyX, enemyY, enemyX-1, enemyY),
                15,
                '#fff',
                500
            )
        );
        player.projectileTimer = Date.now();
				        enemy.push(
            new aenemy(
                enemyX,
                enemyY,
                new Trajectoryenemy(enemyX, enemyY, enemyX-1, enemyY),
                5,
                '#fff',
                250
            )
        );
        player.projectileTimer = Date.now();
						        enemy.push(
            new aenemy(
                enemyX,
                enemyY,
                new Trajectoryenemy(enemyX, enemyY, enemyX-1, enemyY),
                2.5,
                '#fff',
                125
            )
        );
        player.projectileTimer = Date.now();
		
    } 
        } 
    
 
    updateProjectiles(mod);

    if (32 in keysDown) {
	    jumpgravity = -200;
    //    player.currentState = 'left';
        player.y -= player.speed * mod;
        updateAnimation(player.stateAnimations[player.currentState]);
    }
	
	    if (65 in keysDown) {
location.reload(true);
    } else if (66 in keysDown) {
location.reload(true);
}else if (67 in keysDown) {
location.reload(true);
}else if (68 in keysDown) {
location.reload(true);
}else if (69 in keysDown) {
location.reload(true);
}else if (70 in keysDown) {
location.reload(true);
}else if (71 in keysDown) {
location.reload(true);
}else if (72 in keysDown) {
location.reload(true);
}else if (73 in keysDown) {
location.reload(true);
}else if (74 in keysDown) {
location.reload(true);
}else if (75 in keysDown) {
location.reload(true);
}else if (76 in keysDown) {
location.reload(true);
}else if (77 in keysDown) {
location.reload(true);
}else if (78 in keysDown) {
location.reload(true);
}else if (79 in keysDown) {
location.reload(true);
}else if (80 in keysDown) {
location.reload(true);
}else if (81 in keysDown) {
location.reload(true);
}else if (82 in keysDown) {
location.reload(true);
}else if (83 in keysDown) {
location.reload(true);
}else if (84 in keysDown) {
location.reload(true);
}else if (85 in keysDown) {
location.reload(true);
}else if (86 in keysDown) {
location.reload(true);
}else if (87 in keysDown) {
location.reload(true);
}else if (88 in keysDown) {
location.reload(true);
}else if (89 in keysDown) {
location.reload(true);
}else if (90 in keysDown) {
location.reload(true);
}
	/*
    else if (39 in keysDown) {
        player.currentState = 'right';
        player.y += player.speed * mod;
        updateAnimation(player.stateAnimations[player.currentState]);
    }
    */
	
           // If right wall and slayer are touching
		if (
		player.x <= (rightwall.x + 1)
		&& rightwall.x <= (player.x + 42)
		&& player.y <= (rightwall.y + 512)
		&& rightwall.y <= (player.y + 40)
	) {
		player.x = 857;
	}

       // If left wall and slayer are touching
		if (
		player.x <= (leftwall.x + 1)
		&& leftwall.x <= (player.x + 60)
		&& player.y <= (leftwall.y + 512)
		&& leftwall.y <= (player.y + 40)
	) {
		player.x = 1;
	}
		        if (alien.y > 300){
	        alien.y = 300;
	        }
			


    
}
 
function render() {

	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawSprite(player);
    ctx.fillStyle = '#fff';
    ctx.font = '15pt Arial';
    ctx.textBaseline = 'top';
//    ctx.fillText('Stars showed: ' + ammo +  '   Time: ' + elapsed, canvas.width/3, 15);
//    for (var key in projectiles) {
//        drawSquare(projectiles[key].x, projectiles[key].y, projectiles[key].size, projectiles[key].color);
//    }
    
        for (var key in enemy) {
        drawSquare(enemy[key].x, enemy[key].y, enemy[key].size, enemy[key].size/10,enemy[key].color);
    }

    
   


 }
    
 
function main() {
    var now = Date.now();
	var delta = now - then;
    update(delta / 1000);
    render();

    then = now;
}
 
var then = Date.now();
setInterval(main, 1);
