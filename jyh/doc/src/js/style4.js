$(function(){
		//用户登录切换
  		var tab = document.querySelector('#tab');
		var contents = document.querySelectorAll('.content');
		var spans = document.querySelectorAll('.title div');
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
  		// 表单验证插件
		$("form").validate({
			rules:{
				number:{number:false},
				password:{
	                required: true,
	                minlength: 6,
	                maxlength: 16
	            },
	            repassword:{
	                required: true,
	                equalTo: ".password"
	            },
	            messages:{
					number:{number:'请输入您的手机号',}
				}
			}			
		});
  		//广告
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