function Place() {
	this.imgwhite = "images/qar.png";
	this.imgred = "images/qar1.png";
	this.state = 2;
	this.count = 0;
}

var zar = [1, 2, 3, 4, 5, 6]
var place = new Place();
function Nardy() {
	this.tdarr = new Array();
	this.countState = {
		"imgcount" : []
	};
	for ( i = 0; i < 24; i++) {
		this.countState.imgcount.push({
			"count" : place.count,
			"state" : place.state
		});
	}
}

function clickZar() {
	document.getElementById("zarbut").style.display = "none";
	var math = Math.floor((Math.random() * zar.length));
	var math1 = Math.floor((Math.random() * zar.length));
	var zardiv = document.getElementById("zar");
	document.getElementById('image1').src = "images/zar" + [math] + ".png";
	document.getElementById('image2').src = "images/zar" + [math1] + ".png";
	Place.prototype.choose(math, math1);
}

var nardy = new Nardy();
var redOrWhite = 0;

Nardy.table = function() {
	var loop = 0;
	var tb = document.getElementById("tableID");
	for (var i = 0; i < 3; i++) {
		var tr = document.createElement('tr');
		for (var i1 = 0; i1 < 12; i1++) {
			var td = document.createElement('td');
			if (i1 == 5) {
				td.style.width = "78px";
			}
			if (i == 1) {
				tr.style.height = "420px";
			} else {

				td.setAttribute("id", loop);
				nardy.tdarr.push(loop);
				tr.appendChild(td);
				loop++;
			}
		}
		tb.appendChild(tr);
	}

}
function redStone() {
	nardy.countState.imgcount[12].count = 15;
	nardy.countState.imgcount[12].state = 1;
	document.getElementById("hidebut1").style.display = "none";
	Nardy.prototype.drowPlace();
}

function whiteStone() {
	nardy.countState.imgcount[11].count = 15;
	nardy.countState.imgcount[11].state = 0;
	document.getElementById("hidebut2").style.display = "none";
	Nardy.table();
	document.getElementById("white").style.width = "50px";
	Nardy.prototype.drowPlace();
}

Nardy.prototype.drowPlace = function() {
	$("#table img").hide();
	for (var i1 = 0; i1 < 24; i1++) {
		td = document.getElementById(nardy.tdarr[i1]);
		for ( i = 0; i < nardy.countState.imgcount[i1].count; i++) {
			var img = document.createElement("img");

			if (i1 < 12) {
				if (nardy.countState.imgcount[i1].state == 0) {
					img.src = place.imgwhite;
				} else if (nardy.countState.imgcount[i1].state == 1) {
					img.src = place.imgred;
				}
				img.style.top += i * 23 + 'px';
			} else {
				if (nardy.countState.imgcount[i1].state == 0) {
					img.src = place.imgwhite;
				} else if (nardy.countState.imgcount[i1].state == 1) {
					img.src = place.imgred;
				}
				img.style.bottom += i * 23 + 'px';
			}
			td.appendChild(img);
			img.style.display = "block";
		}
	}
}

Place.prototype.choose = function(math, math1) {
	var f;
	var f1;
	redOrWhite++;
	var stepPlayer = 0;
	var step;
	var insertStone = 0;
	var redState = 1;
	var whiteState = 0;
	var emptyState = 2;
	var zar1 = math;
	var zar2 = math1;
	var h = true;
	for (var i1 = 0; i1 < 24; i1++) {

		document.getElementById(nardy.tdarr[i1]).onclick = function() {
			if (insertStone == 0) {
				f1 = parseInt(this.id);
				insertStone = 1;
			} else {
				f = parseInt(this.id);
				insertStone = 0;
				if (f1 >= 12 && f >= 12) {
					step = f - f1;
				} else if (f1 <= 11 && f <= 11) {
					step = f1 - f;
				} else if (f >= 12 && f1 <= 11) {
					step = (f - 11) + f1;

				} else if (f <= 11 && f1 >= 12) {
					step = 23 - f - (f1 - 12);
				}

				var stateChoes = nardy.countState.imgcount[f1].state;
				var stateInsert = nardy.countState.imgcount[f].state;
				var countChoes = nardy.countState.imgcount[f1].count;
				var countInsert = nardy.countState.imgcount[f].count;

				if (zar[math] == step || zar[math1] == step) {
					var stepPlayer1 = 2;
					if (math == math1) {
						stepPlayer1 = 4;
					}

					if (stepPlayer < stepPlayer1) {

						gameOver(zar1, zar2);
						//document.getElementById("tableID").getElemetsByTagName("img").style.display="none";
						if (redOrWhite % 2 != 0 && (stateChoes == whiteState && (stateInsert == whiteState || stateInsert == emptyState))) {
							stepPlayer++;
							nardy.countState.imgcount[f].state = whiteState;
							decCount(f1, f,zar1,zar2,step,stepPlayer1);
						} else if (redOrWhite % 2 == 0 && (stateChoes == redState && (stateInsert == redState || stateInsert == emptyState))) {
							stepPlayer++;
							nardy.countState.imgcount[f].state = redState;
							decCount(f1, f,zar1,zar2,step,stepPlayer1);
						}
					}
					if (stepPlayer == stepPlayer1) {
						if (redOrWhite % 2 != 0) {
							document.getElementById("red").style.width = "50px";
							document.getElementById("white").style.width = "25px";

						} else {
							document.getElementById("white").style.width = "50px";
							document.getElementById("red").style.width = "25px";
						}
						clickZar();

					}

				}
			}

		}
	}

}
function decCount(f1, f,math,math1,step,stepPlayer1) {
	nardy.countState.imgcount[f1].count = nardy.countState.imgcount[f1].count - 1;
	nardy.countState.imgcount[f].count = nardy.countState.imgcount[f].count + 1;
	if (nardy.countState.imgcount[f1].count == 0) {
		nardy.countState.imgcount[f1].state = 2;
	}
	if (zar[math] == step && stepPlayer1 != 4) {
		math = -1;
	}
	if (zar[math1] == step && stepPlayer1 != 4) {
		math1 = -1;
	}
	$("#tableID img").css("display", "none");
	Nardy.prototype.drowPlace();
}

function gameOver(math, math1) {
	var endWhiteCount = 0;
	var endWhiteState = 1;
	var endRedCount = 0;
	var endRedState = 1;
	for (var i = 18; i < 24; i++) {
		endWhiteCount += nardy.countState.imgcount[i].count;
		endWhiteState *= nardy.countState.imgcount[i].state;
	};
	for (var i1 = 0; i1 < 6; i1++) {
		endRedCount += nardy.countState.imgcount[i1].count;
		endRedState *= nardy.countState.imgcount[i1].state
	}
	alert(endWhiteCount);
	if (endWhiteCount == 15 && endWhiteState == 0) {
		h(math, math1);

	} else if (endRedCount == 15 && endRedState != 0) {
		alert("Game over: Red player");
		h(math, math1);
	}
}

var position = 1;

function h(math, math1) {
	for (var i1 = 18; i1 < 24; i1++) {
		document.getElementById(nardy.tdarr[i1]).onclick = function() {
			var f1 = parseInt(this.id);
			alert(zar[math] + "   " + zar[math1])
			alert((24 - f1) + " aa ");
			if ((24 - f1) == zar[math] || (24 - f1) == zar[math1]) {
				alert("count" + nardy.countState.imgcount[f1].count);
				alert("Game over:white player");
				if (nardy.countState.imgcount[f1].count > 0) {
					nardy.countState.imgcount[f1].count = nardy.countState.imgcount[f1].count - 1;
					$("#tableID img").css("display", "none");
					Nardy.prototype.drowPlace();
					for (var i2 = 0; i2 < position; i2++) {
						var img = document.createElement("img");
						img.src = place.imgred;
						img.style.right = "30px";
						img.style.bottom = img.style.bottom + position * 20 + 'px';
						alert(img.style.bottom);
						document.getElementById("nardy").appendChild(img);
					}
					position++;
				}
			} else if (nardy.countState.imgcount[(24 - zar[math])].count == 0 || (nardy.countState.imgcount[(24 - zar[math1])].count == 0)) {
			}
		}
	}
}

/*function p(img){
 img.onmousedown = function() {
 this.style.position = 'absolute'

 var self = this

 document.onmousemove = function(e) {
 e = e || event;
 fixPageXY(e);

 self.style.left = e.pageX-1+'px';
 self.style.top = e.pageY-1+'px';
 this.onmouseup = function() {
 document.onmousemove = null;
 }
 }

 }

 img.ondragstart = function() { return false }

 //img.ondragstart = function() { return true}
 }

 function fixPageXY(e) {
 if (e.pageX == null && e.clientX != null) {
 var html = document.getElementById("nardy");
 e.pageX = e.clientX + (html.scrollLeft || 0);
 e.pageX -= html.clientLeft || 0;
 e.pageY = e.clientY + (html.scrollTop || 0);
 e.pageY -= html.clientTop || 0;
 }
 }*/

