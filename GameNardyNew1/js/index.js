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
	for ( i = 1; i < 24; i++) {
		this.countState.imgcount.push({
			"count" : place.count,
			"state" : place.state
		});
	}
}

function clickZar() {
	var math = Math.floor((Math.random() * zar.length));
	var math1 = Math.floor((Math.random() * zar.length));
	var zardiv = document.getElementById("zar");
	document.getElementById('image1').src = "images/zar" + [math] + ".png";
	document.getElementById('image2').src = "images/zar" + [math1] + ".png";
	Place.prototype.choose(math, math1);
}

var nardy = new Nardy();
var f;
var f1;
var kkk = 0;

Nardy.table = function() {
	var loop = 0;
	var tb = document.getElementById("table1ID");
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

				td.setAttribute("id", "tdid" + loop);
				nardy.tdarr.push("tdid" + loop);
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
	Nardy.prototype.drowPlace(12, 1);
}

function whiteStone() {
	nardy.countState.imgcount[11].count = 15;
	nardy.countState.imgcount[11].state = 0;
	document.getElementById("hidebut2").style.display = "none";
	Nardy.table();
	Nardy.prototype.drowPlace(0, 0);
}

Nardy.prototype.drowPlace = function(index, state) {

	for (var i1 = index; i1 < index + 12; i1++) {
		td = document.getElementById(nardy.tdarr[i1]);
		for ( i = 0; i < nardy.countState.imgcount[i1].count; i++) {
			var img = document.createElement("img");
			if (state == 0) {
				img.src = place.imgwhite;
			} else {
				img.src = place.imgred;
			}
			td.appendChild(img);
			if (state == 0) {
				img.style.top += i * 23 + 'px';
			}
			if (state == 1) {
				img.style.bottom += i * 23 + 'px';
			}
			img.style.display = "block";
		}
	}
}
Place.prototype.choose = function(math, math1) {
	kkk++;
	var hhh = 0;
	var step;
	var insertStone = 0;
	for (var i1 = 0; i1 < 24; i1++) {
		document.getElementById(nardy.tdarr[i1]).onclick = function() {
			if (insertStone == 0) {
				var tdsid1 = this.id;
				f1 = parseInt(tdsid1.slice(4, 6));
				alert("remove" + nardy.countState.imgcount[f1].count);
				insertStone = 1;
				//
			} else {
				var tdsid = this.id;
				f = parseInt(tdsid.slice(4, 6));
				alert("add" + nardy.countState.imgcount[f].count);
				insertStone = 0;
				if (f1 >= 12) {
					step = f - f1;
				} else {
					step = f1 - f;
				}
			
				if (zar[math] == step || zar[math1] == step) {
					nardy.countState.imgcount[f1].count = nardy.countState.imgcount[f1].count - 1;
					nardy.countState.imgcount[f].count = nardy.countState.imgcount[f].count + 1;
					alert("hhh=" + hhh);
					if (hhh < 2) {
						hhh++;
						if (kkk % 2 != 0) {
							nardy.countState.imgcount[f1].state = 0;
							Nardy.prototype.drowPlace(0, 0);

						} else {
							nardy.countState.imgcount[f1].state = 1;
							Nardy.prototype.drowPlace(12, 1);
						}

					}

				}
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

