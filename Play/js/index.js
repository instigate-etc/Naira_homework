function Proprty() {
	this.cordx = 10;
	this.cordy = 10;
	this.speed = 9;
}

var prop = new Proprty();
function mainPlayer() {
	this.img = "images/mainplayer.png";
	this.cordx = prop.cordx;
	this.cordy = prop.cordx;
	this.speed = prop.speed;

}

function zombyPlayer() {
	 this.zombi = {"imgZombi":[{
		"img" : "images/zombi1.png",
		"cordx" : prop.cordx+20,
		"cordy" : prop.cordy+20,
		"speed" : prop.speed,
	},{
		"img" : "images/zombi2.png",
		"cordx" : prop.cordx+40,
		"cordy" : prop.cordy+60,
		"speed" : prop.speed,
	},{
		"img" : "images/zombi3.png",
		"cordx" : prop.cordx+20,
		"cordy" : prop.cordy+50,
		"speed" : prop.speed,
	}]}

}

window.onload = function() {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	//ctx.beginPath();

	ctx.lineWidth = "2";
	ctx.strokeStyle = "blue";
	ctx.rect(30, 30, 500, 500);
	ctx.stroke();
	mainPlayer.prototype.movePlayer(ctx);
	zombyPlayer.prototype.moveZombi(ctx);
}
var main = new mainPlayer();
var z = new zombyPlayer();
mainPlayer.prototype.movePlayer = function(ctx) {
	player = new Image();
	player.src = main.img;
	player.onload = function() {
		ctx.drawImage(player, main.cordx, main.cordx, 30, 50);
	}
	window.addEventListener('keydown', downKey, true);
}


zombyPlayer.prototype.moveZombi = function(ctx) {
	player1 = new Image();
	player2 = new Image();
	player1.src = z.zombi.imgZombi[1].img;
	player1.onload = function(){
		ctx.drawImage(player1, z.zombi.imgZombi[1].cordx, z.zombi.imgZombi[1].cordx, 30, 40);
	}
	player2.src = z.zombi.imgZombi[0].img;
	player2.onload = function(){
		ctx.drawImage(player2, z.zombi.imgZombi[0].cordx, z.zombi.imgZombi[0].cordx, 30, 40);
	}
//	window.addEventListener('keydown', downKey, true);
}
function downKey(evt) {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.beginPath();

	// Flag to put variables back if we hit an edge of the board.
	switch (evt.keyCode) {

		// Left arrow.
		case 37:
			if (main.cordx > 30) {
				main.cordx -= main.speed;
				ctx.drawImage(player, main.cordx, main.cordy, 30, 50);
			}
			break;

		// Right arrow.
		case 39:
			if (main.cordx < 520) {
				main.cordx += main.speed;
				ctx.drawImage(player, main.cordx, main.cordy, 30, 50);
			}

			break;

		// Down arrow
		case 40:
			if (main.cordy < 500) {
				main.cordy += main.speed;
				ctx.drawImage(player, main.cordx, main.cordy, 30, 50);
			}

			break;

		// Up arrow
		case 38:
			if (main.cordy > 30) {
				main.cordy -= main.speed;
				ctx.drawImage(player, main.cordx, main.cordy, 30, 50);
			}

			break;

	}
}