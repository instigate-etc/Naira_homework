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
function clickZar() {
	var math = Math.floor((Math.random() * zar.zarimg.length));
	var math1 = Math.floor((Math.random() * zar.zarimg.length));
	var zardiv = document.getElementById("zar");
	document.getElementById('image1').src = zar.zarimg[math].srcimg;
	document.getElementById('image2').src = zar.zarimg[math1].srcimg;
	zarshow(zar.zarimg[math].imgindex,zar.zarimg[math1].imgindex);
}



var places = {
	"place" : [{
		"countStone" : 0,
		"imgindexI" : 0,
		"imgindexJ" : 0,
		
	}, {
		"countStone" : 0,
		"imgindexI": 0,
		"imgindexI":1,
		
	}, {
		"countStone" : 0,
		"imgindexI" : 0,
		"imgindexJ" : 2,
	}, {
		"countStone" : 0,
		"imgindexI" : 0,
		"imgindexJ" : 3,
	}, {
		"countStone" : 0,
		"imgindexI" : 0,
		"imgindexJ" : 4,
	}, {
		"countStone" : 0,
		"imgindexI" : 0,
		"imgindexJ" : 5,
	}, {
		"countStone" : 0,
		"imgindexI" : 0,
		"imgindexJ" : 6,
	},{
		"countStone" : 0,
		"imgindexI" : 0,
		"imgindexJ" : 7,
		
	}, {
		"countStone" : 0,
		"imgindexI" : 0,
		"imgindexJ" : 8,
	}, {
		"countStone" : 0,
		"imgindexI" : 0,
		"imgindexJ" : 9,
	}, {
		"countStone" : 0,
		"imgindexI" : 0,
		"imgindexJ" : 10,
	}, {
		"countStone" : 0,
		"imgindexI" : 0,
		"imgindexJ" : 11,
	}, {
		"countStone" : 15,
		"imgindexI" : 0,
		"imgindexJ" : 12,
	},{
		"countStone" : 17,
		"imgindexI" : 17,
		"imgindexJ" : 0,
		
	}, {
		"countStone" : 0,
		"imgindexI": 17,
		"imgindexI":1,
		
	}, {
		"countStone" : 0,
		"imgindexI" :17,
		"imgindexJ" : 2,
	}, {
		"countStone" : 0,
		"imgindexI" : 17,
		"imgindexJ" : 3,
	}, {
		"countStone" : 0,
		"imgindexI" : 17,
		"imgindexJ" : 4,
	}, {
		"countStone" : 0,
		"imgindexI" : 17,
		"imgindexJ" : 5,
	}, {
		"countStone" : 0,
		"imgindexI" : 17,
		"imgindexJ" : 6,
	},{
		"countStone" : 0,
		"imgindexI" : 17,
		"imgindexJ" : 7,
		
	}, {
		"countStone" : 0,
		"imgindexI" : 17,
		"imgindexJ" : 8,
	}, {
		"countStone" : 0,
		"imgindexI" : 17,
		"imgindexJ" : 9,
	}, {
		"countStone" :0,
		"imgindexI" : 17,
		"imgindexJ" : 10,
	}, {
		"countStone" : 0,
		"imgindexI" : 17,
		"imgindexJ" : 11,
	}, {
		"countStone" : 0,
		"imgindexI" : 17,
		"imgindexJ" : 12,
	},
	
	
	]
};


window.onload = function() {
	var tb1 = document.getElementById("table1ID");

	for (var i1 = 0; i1 < 18; i1++) {
		
		var tr = document.createElement('tr');
		for (var j = 0; j < 13; j++) {
			var td = document.createElement('td');
			if (j == 6) {
				td.style.width = "55px";
			}
			td.setAttribute("id", "tdid" + "-"+i1+"-" + j);
			tr.appendChild(td);
			tb1.appendChild(tr);
		}
		/*if(i1<15){
		td.innerHTML="<img src='images/qar.png'/>";
		}*/

	}


}
function whiteStone() {

	//var whitestone = new Array();
	for ( i = 0; i < places.place[12].countStone; i++) {
		var src = document.getElementById("tdid" + "-"+i +"-"+ "12");
		src.innerHTML="<img  src='images/qar.png' />";
	}
	 document.getElementById("hidebut2").style.display="none";
}


function redStone(){
	 document.getElementById("hidebut1").style.display="none";
	//var redstone = new Array();
	for ( i = places.place[13].countStone; i > 2; i--) {
		var src1 = document.getElementById("tdid" +"-"+ i+"-" + "0");
		src1.innerHTML="<img  src='images/qar1.png' />";
	}
			tds = document.getElementsByTagName("td");
	for (var x = 0; x < tds.length; x++) {
tds[x].onclick = function() {
			var tdsid = this.id;
			this.innerHTML="";
		}

}

}

function zarshow(a1,a2){
	img1 = document.getElementsByTagName("td");
	for (var x = 0; x < img1.length; x++) {
		img1[x].onclick = function() {
	//document.getElementById(this.id).innerHTML = "<img  src='images/qar.png' />";
document.getElementById("tdid" + "-"+0+"-" + (12-a1)).innerHTML ="<img  src='images/qar.png' />";
document.getElementById("tdid" + "-"+0+"-" + (12-a2)).innerHTML = "<img  src='images/qar.png' />";
alert(a1);
alert(a2);
		}
		}
}
