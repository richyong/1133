
window.onload=function(){
	//商品详情切换
	var tab = document.querySelector('#car');
	var contents = document.querySelectorAll('.content');
	var divs = document.querySelectorAll('.tab div');
	var obutn=document.querySelector('#suan');
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
	//购物车
	//var str = '[{product:"9142453",title:"雅鹿亲肤棉印花女士内衣套装", price:"RMB138",img:"../css/images.jpg",nub:"1"}, {product:"9142453",title:"雅鹿亲肤棉印花女士内衣套装", price:"RMB85",img:"../css/images.jpg",nub:"1"}]';
	var adv=document.getElementById("adv");
	var ospan=document.getElementById("span");
	var str = getCookie("arr");
	if(str!=''){
		var arr = eval(str);
	}else{
		return;
	}
	//console.log(str);
	var content=0;
	for (var i = 0; i < arr.length; i++){
		var res=0;
		
		var ul=document.createElement("ul");
		var oLi = document.createElement("li");
		var oLi1 = document.createElement("li");
		var oLi2 = document.createElement("li");
		var oLi3 = document.createElement("li");
		var tet=document.createElement("input");
		tet.className='Oinput';
		var oLi4 = document.createElement("li");
		var btn = document.createElement("a");
		btn.className="tat";
		
		oLi.innerHTML =arr[i].product;
		oLi1.innerHTML =arr[i].title;
		oLi2.innerHTML =arr[i].price;
		tet.type='number';
		tet.min='0';
		tet.value=arr[i].nub;
		oLi3.appendChild(tet);
		btn.innerHTML="删除";
		oLi4.appendChild(btn);
		
		ul.appendChild(oLi);
		ul.appendChild(oLi1);
		ul.appendChild(oLi2);
		ul.appendChild(oLi3);
		ul.appendChild(oLi4);
		adv.appendChild(ul);
		
		var ispan=tet.value;
		var sle=parseInt(arr[i].price);
		res=sle*ispan;
		content+=res;
		//console.log(content)
		if(ul.innerHTML==""){
			ospan.innerHTML="0.00元";
		}
		else{
			ospan.innerHTML="￥"+ content+"元";
		}
		$('.Oinput').on('input',function(){
			var sl=$(this).val();
			ospan.innerHTML="￥"+ (content+sl*sle)+"元";
			if(sl==0){
				ospan.innerHTML="￥"+(content-sl*sle)+"元";
			}
		})
		//移除按钮
		//$('.tat').click(function(){
			//alert("666666")
		//	$(this).parent().parent().remove();
		//})
		
	}
	//跳转页面
	$("#gw").click(function(){
		window.location.href="list.html"
	})
	
	//未能完成                             
	
	//$('#suan').click(function(){
	//	Window.location.href="car.html#net";
	//})

}