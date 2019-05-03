

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



var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
document.body.appendChild(canvas);
 
  // Alien image
var alienReady = false;


// Background image
var bgReady = false;



var playerdead = 0;


 
function Tileset(image, tileWidth, tileHeight) {
    this.image = new Image();
    this.image.src = image;
    this.tileWidth = tileWidth;
    this.tileHeight = tileHeight;
}
 
function Animation(frames, frameDuration) {
}
 
function Sprite(stateAnimations, startingState, x, y, width, height, speed) {
    this.stateAnimations = stateAnimations;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
}

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

var spriteTileStand = new Tileset('', 44, 44);
var spriteStand = new Animation(spriteTileStand, ['0,0'], 350);
 
 
var player = new Sprite({'stand': spriteStand}, 'stand', canvas.width / 4, canvas.height / 2.5, 44, 44,  50);

 


player.projectileTimer = Date.now();
player.shootDelay = 50;


var enemy = [];

var ammo = 0;




function update(mod) {
	canvas.width = document.documentElement.clientWidth;
	canvas.height = document.documentElement.clientHeight;

	enemyX = canvas.width-1;

	player.currentState = 'stand';
	updateAnimation(player.stateAnimations[player.currentState]);


var rain = true;

     if (rain && Date.now() - player.projectileTimer > player.shootDelay) {
        if (ammo > -1){

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

}
 
function render() {

	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
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
