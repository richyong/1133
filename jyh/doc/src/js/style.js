$(function(){
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
    	},2500);
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
});