$(function(){
		
		$('#sys').on('mouseenter',function(){
			$('#ttp').show();
		})
		$('#sys').on('mouseleave',function(){
			$('#ttp').hide();
		})
	
		//轮播图
  		var curIndex=0;
  		//切换封装函数
		function change(num){ 
	        $(".imgList").find("li").hide().eq(num).show();
	        $(".cicre").find("li").removeClass("cicre-active").eq(num).addClass("cicre-active");
	    }
		//定时切换图片
  		var autoChange = setInterval(function(){ 
	        if(curIndex <  $(".imgList li").length-1){ 
	            curIndex ++; 
	        }else{ 
	            curIndex = 0;
	        }
	        //调用变换处理函数
	        change(curIndex);  
    	},500);
    	//鼠标划过下标切换图片
    	$(".cicre").find("li").each(function(item){ 
	        $(this).hover(function(){ 
	            clearInterval(autoChange);
	            change(item);
	            curIndex = item;
	        },function(){ 
	            autoChange = setInterval(function(){ 
	                if(curIndex <  $(".imgList li").length-1){ 
	                    curIndex ++; 
	                }else{ 
	                    curIndex = 0;
	                }
	                //调用变换处理函数
	                change(curIndex);  
	            },2500);
	        });
		});
		
		//
		window.onscroll = function(){
			// 当滚动的时候执行这段代码
			// 当前滚动条的位置
			var t = document.body.scrollTop;
			var oDiv = document.getElementById("div1");
			var OWX=document.getElementById("wx");
			var OGZ=document.getElementById("gz");
			if (t >= 800){
				oDiv.style.display = "block";
				OWX.style.display = "block";
				OGZ.style.display = "block";
			}
			else {
				oDiv.style.display = "none";
				OWX.style.display = "none";
				OGZ.style.display = "none";
			}
			OGZ.onclick = function() {
				window.location.href="html/list.html";
			}
			oDiv.onclick = function() {
				document.body.scrollTop = 0;
			}
		}
		
		var oBox = document.getElementById("box");
		var oSec = document.getElementById("sec");
  		var timeout = setTimeout(fn, 1000);
		function fn() {
			
			oSec.innerHTML--;
			
			if (oSec.innerHTML < 0) {
				oBox.style.display = "none";
			} else {
				setTimeout(fn, 1000);
			}
		}
});