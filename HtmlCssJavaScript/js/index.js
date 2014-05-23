
var args=[5,6,9,5,1,2,89,12]		
var c;
var j;
var sort_count = 0;
var t = true;
$(document).ready(function(){

while (t == true) {
t = false;
j = 0;
for (var i = 1; i < args.length - j; i++) {
if (args[i - 1] > args[i]) {
t = true;
c = args[i - 1];
args[i - 1] = args[i];
args[i] = c;

$("#a"+i).addClass("select");
$("#a"+(i-1)).addClass("select");
$("#a"+(i-1)).css({"margin-top":"800px"});
//document.getElementById("a"+i).style.backgroundColor = "#00aaff";
//document.getElementById("a"+(i-1)).style.backgroundColor = "#0033ff";
j = i;
}

sort_count++;
}
}
fun(i);
})
function fun(i){
 $( "#a"+i).animate({

left: "+=120",

}, 5000);
 $( "#a"+(i-1)).animate({

left: "+=60",

}, 5000);
$("#a"+i).addClass("select");
$("#a"+(i-1)).addClass("select");}
