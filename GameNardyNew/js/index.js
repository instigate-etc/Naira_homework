window.onload = function() {

}
var Place = new Object();
var zar = {
	"zarimg" : [{
		"srcimg" : 'images/zar1.png',
		"imgindex" : 1
	}, {
		"srcimg" : 'images/zar2.png',
		"imgindex" : 2
	}, {
		"srcimg" : 'images/zar3.png',
		"imgindex" : 3
	}, {
		"srcimg" : 'images/zar4.png',
		"imgindex" : 4
	}, {
		"srcimg" : 'images/zar5.png',
		"imgindex" : 5
	}, {
		"srcimg" : 'images/zar6.png',
		"imgindex" : 6
	}]
};
var count = {
	"imgcount" : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
}
var esim = 0;
var math;
var math1;
var e;
var f;
var f1;
function clickZar() {
	math = Math.floor((Math.random() * zar.zarimg.length));
	math1 = Math.floor((Math.random() * zar.zarimg.length));
	var zardiv = document.getElementById("zar");
	document.getElementById('image1').src = zar.zarimg[math].srcimg;
	document.getElementById('image2').src = zar.zarimg[math1].srcimg;
	zarshow(zar.zarimg[math].imgindex, zar.zarimg[math1].imgindex);
}

function iftrue() {
	if (zar.zarimg[math].imgindex == e || zar.zarimg[math1].imgindex == e) {
		alert("yes");
	} else {
		alert("no")
	}
}

function redStone() {
	var index = 12;
	var img1 = "images/qar1.png";
	var tb = document.getElementById("table2ID");
	if (esim == 0) {
		Place.table(index, tb);
		esim++;
	}
	Place.convas(index, tb, img1, -23);
	//document.getElementById("hidebut2").style.display = "none";
	iftrue();
}

function whiteStone() {
	var index = 0;
	var img1 = "images/qar.png";
	var tb = document.getElementById("table1ID");
	Place.table(index, tb);
	Place.convas(index, tb, img1, 23);
	//document.getElementById("hidebut1").style.display = "none";
	iftrue();
}

Place.table = function(index, tb) {
	var tr = document.createElement('tr');
	for (var i1 = index; i1 < index + 12; i1++) {
		var td = document.createElement('td');
		if (i1 == index + 5) {
			td.style.width = "78px";
		}
		td.setAttribute("id", "tdid" + i1);
		tr.appendChild(td);
		tb.appendChild(tr);
	}
}
function zarshow(a, b) {
	var pp = 0;
	$(function() {
		$("#nardy img").draggable();
	});
	//p(img);
	for (var i1 = 0; i1 < 24; i1++) {
		//document.getElementById("tdid" + i1).onclick = function() {
		$("#tdid" + i1).click(function() {
			if (pp == 0) {
				var tdsid1 = this.id;
				f1 = tdsid1.slice(4, 6);
				count.imgcount[f1] = count.imgcount[f1] - 1;
				//	alert(f1);
				alert("remove" + count.imgcount[f1]);
				pp = 1;
				//	alert(parseInt(f1));
			} else {
				var tdsid = this.id;
				f = tdsid.slice(4, 6);
				count.imgcount[f] = count.imgcount[f] + 1;
				alert("add" + count.imgcount[f]);
				pp = 0;
				if (parseInt(f1) >= 12) {
					e = parseInt(f) - parseInt(f1);
				} else {
					e = parseInt(f1) - parseInt(f);
				}
				alert(e);

			}

		})
	}

}

Place.convas = function(index, f, img1, top) {
	for (var i1 = index; i1 < index + 12; i1++) {
		td = document.getElementById("tdid" + i1);
		for ( i = 0; i < count.imgcount[i1]; i++) {
			var img = document.createElement("img");
			//	alert("esim" + count.imgcount[i1]);
			img.src = img1;
			td.appendChild(img);
			img.style.top += i * (top) + 'px';
			img.style.display = "block";
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

