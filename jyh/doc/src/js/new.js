
window.onload=function(){
	//商品详情切换
	var tab = document.querySelector('#car');
	var contents = document.querySelectorAll('.content');
	var divs = document.querySelectorAll('.tab div');
	for (var i = 0; i < contents.length; i++) {
		if(i==0){
			divs[i].className="active";
		}else{
			contents[i].style.display="none";
		}
		divs[i].index=i;
		divs[i].onclick=function(){
			for (var i = 0; i < contents.length; i++) {
				contents[i].style.display="none";
				divs[i].className="";
			}
			contents[this.index].style.display="block";
			divs[this.index].className="active";
		}
	}
}