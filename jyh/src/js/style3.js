window.onload=function(){
	//商品详情切换
	var tab = document.querySelector('#tab');
	var contents = document.querySelectorAll('.content');
	var spans = document.querySelectorAll('.title span');
	for (var i = 0; i < contents.length; i++) {
		if(i==0){
			spans[i].className="active";
		}else{
			contents[i].style.display="none";
		}
		spans[i].index=i;
		spans[i].onclick=function(){
			for (var i = 0; i < contents.length; i++) {
				contents[i].style.display="none";
				spans[i].className="";
			}
			contents[this.index].style.display="block";
			spans[this.index].className="active";
		}
	}
}