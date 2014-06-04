function Proprty() {
	this.cordx
	this.cordy
	this.speed = 9;
}

var prop = new Proprty();
function mainPlayer() {
	this.img = "images/mainplayer.png";
	prop.cordx = 10;
	prop.cordy = 10;

}

function zombyplayer() {

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
}
var main = new mainPlayer();
mainPlayer.prototype.movePlayer = function(ctx) {
	player = new Image();
	player.src = main.img;
	player.onload = function() {
		ctx.drawImage(player, prop.cordx, prop.cordx, 30, 50);
	}
	window.addEventListener('keydown', downKey, true);
}
function downKey(evt) {

	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.beginPath();

	// Flag to put variables back if we hit an edge of the board.
	switch (evt.keyCode) {

		// Left arrow.
		case 37:
		if(prop.cordx>30){
			prop.cordx -= 10;
			ctx.drawImage(player, prop.cordx, prop.cordy, 30, 50);}
			break;

		// Right arrow.
		case 39:
		if(prop.cordx<520){
			prop.cordx += 10;
			ctx.drawImage(player, prop.cordx, prop.cordy, 30, 50);}

			break;

		// Down arrow
		case 40:
		if(prop.cordy<500){
			prop.cordy += 10;
			ctx.drawImage(player, prop.cordx, prop.cordy, 30, 50);}

			break;

		// Up arrow
		case 38:
		if(prop.cordy>30){
			prop.cordy -= 10;
			ctx.drawImage(player, prop.cordx, prop.cordy, 30, 50);}

			break;

	}
}