function fun() {
	var dlack_qar = new Array();
	for ( i = 0; i < 15; i++) {
		var src = document.getElementById("nardy");
		var img = document.createElement("img");
		img.style.right = "82px";
		dlack_qar.push("images/qar.png");
		//alert(dlack_qar[i]);
		img.src = dlack_qar[i];
		src.appendChild(img);
		var children = src.children.length + 1;
		img.setAttribute("id", "element" + children);
		img.style.top = (i + 1) * 20 + 'px';

	}
}

function fun1() {
	var img1 = document.createElement("img");
	var read_qar = new Array();
	for ( i = 0; i < 15; i++) {
		var src = document.getElementById("nardy");
		var img1 = document.createElement("img");
		img1.style.left = "82px";
		img1.src = "images/qar1.png";
		src.appendChild(img1);
		read_qar.push(src);
		//alert(read_qar[i]);
		img1.style.top = (470 - 20 * (i + 1)) + 'px';
	}


}
var img = document.getElementById('ball');
var field = document.getElementById('field');
img.onclick = function() {
  var from = 0;
  var to = field.clientHeight - img.clientHeight;
  animate({
    delay: 20,
    duration: 1000,

    delta: makeEaseOut(bounce), 
    step: function(delta) {
      img.style.top = to*delta + 'px'
    }

  });
}