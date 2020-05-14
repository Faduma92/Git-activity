document.getElementById("button1").addEventListener("click", function(){
	document.getElementById("box").style.backgroundColor = "orange";
	document.getElementById("box").style.height = "350px";
	document.getElementById("box").innerHTML = "";
});

document.getElementById("button2").addEventListener("click", function(){
	document.getElementById("box").style.backgroundColor = "blue";
}) 

$("button3").click(function(){
	$("#box").fadeOut();
  });

  $(document).ready(function(){
	$(".button3").click(function(){
	  $("box").fadeOut();
	});