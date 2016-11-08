
	window.onload=function(){
  		//放大镜
  		function bigimg(){
			var bbox = document.getElementById("box");
			var bmove = document.getElementById("move");
			var bbimg = document.getElementById("bimg");
			var b_bimg = document.getElementById("b_bimg");
			bbox.onmouseover = function(){//鼠标移动到box上显示大图片和选框
				bbimg.style.display = "block";
				bmove.style.display="block";
			}
			bbox.onmouseout = function(){//鼠标移开box不显示大图片和选框
				bbimg.style.display = "none";
				bmove.style.display="none";
			}
			bbox.onmousemove = function(e){//获取鼠标位置
				var x = e.clientX;//鼠标相对于视口的位置
				var y = e.clientY;
				var t = bbox.offsetTop;//box相对于视口的位置
				var l = bbox.offsetLeft;
				var _left = x - l - bmove.offsetWidth/2;//计算move的位置
				var _top = y - t -bmove.offsetHeight/2;
				if(_top<=0)//滑到box的最顶部
				  	_top = 0;
				else if(_top>=bbox.offsetHeight-bmove.offsetHeight)//滑到box的最底部
				  	_top = bbox.offsetHeight-bmove.offsetHeight ;
				if(_left<=0)//滑到box的最左边
				  	_left=0;
				else if(_left>=bbox.offsetWidth-bmove.offsetWidth)//滑到box的最右边
				  	_left=bbox.offsetWidth-bmove.offsetWidth ;
					bmove.style.top = _top +"px";//设置move的位置
					bmove.style.left = _left + "px";
					var w = _left/(bbox.offsetWidth-bmove.offsetWidth);//计算移动的比例
					var h = _top/(bbox.offsetHeight-bmove.offsetHeight);
					var b_bimg_top = (b_bimg.offsetHeight-bbimg.offsetHeight)*h;//计算大图的位置
					var b_bimg_left = (b_bimg.offsetWidth-bbimg.offsetWidth)*w;
					b_bimg.style.top = -b_bimg_top + "px";//设置大图的位置信息
					b_bimg.style.left = -b_bimg_left + "px";
			}
			     
		}
		bigimg();
		//点击选中尺寸
		var ospan=$('#change').find('span');
			ospan.each(function(idx,ele){
			$(this).on('click',function(){
				$(this).addClass('border-change').siblings().removeClass('border-change');
			})
		})
		
		//加入数量增减
		var shuliang=document.getElementById("nub").value;
		document.getElementById("jian").onclick=function(){
			if(document.getElementById("nub").value <= 1){
				return;
			}
			document.getElementById("nub").value=--shuliang;
		}
		document.getElementById("jia").onclick=function(){
			document.getElementById("nub").value=++shuliang;
		}
		//加入购物车
		var str = getCookie("arr");
		var arr = [];// 用于存储所有的商品
		if (str != ""){
			arr = eval(str);// 说明之前 cookie 中有商品的内容取出来转换成数组
		}
		//获取购买按钮，并给其绑定点击事件
		var btn=document.getElementById("b-btn")
		btn.onclick=function(){
			var Oh2=document.getElementById('li2');
			var li=document.getElementById("li1");
	  		var Onub=document.getElementById('nub');
			var Ojg=document.getElementById('jg');

	  		var obj={};
			obj.title=Oh2.innerHTML;
			obj.product=li.innerHTML;
	  		obj.price=Ojg.innerHTML;
	  		obj.nub=Onub.value;
	  		arr.push(obj);
	  		//console.log(obj)
	  		addCookie("arr",JSON.stringify(arr),7);
	  		window.location.href="car.html";
		}
		$('#jw').on('click',function(){
			var sss=$('#nub').val();
			$('#spantt').html(sss);
			alert('添加成功！')
		});
		
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
