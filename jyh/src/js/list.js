window.onscroll = function(){
	var t = document.body.scrollTop;
	var oDiv = document.getElementById("div1");
	if (t >= 500){
		oDiv.style.display = "block";
	}
	else{
		oDiv.style.display = "none";
	}
}
window.onload = function() {
	var oDiv = document.getElementById("div1");
	oDiv.onclick = function() {
		document.body.scrollTop = 0;
	}
	

}
