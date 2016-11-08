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
  		
		//手机号验证
		$("#username").blur(function(e){
			var tep=$("#username").val();
			var reg=/^1[345678]\d{9}$/;''
			if(!tep.match(reg)){
				$('#spanName').html('手机号格式不对').css({"color":"#F00"});
			}
			else{
				$("#spanName").hide();
			}
		})
		//密码验证
		$("#password").blur(function(e){
			var pwd1=$("#password").val();
			if(pwd1==''){
				$("#spanPwd1").html("密码不能为空").css({"color":"#F00"})
			}else if(pwd1.length<6){
				$("#spanPwd1").html("密码不能少于6位").css({"color":"#F00"});
			}else if(pwd1.length>15){
				$("#spanPwd1").html("密码不能大于15位").css({"color":"#F00"});
			}else{
				$("#spanPwd1").hide();
			}
		});
		//重置密码验证
		$("#repassword").blur(function(e){
			var pwd2=$("#repassword").val();
			if(pwd2==''){
				$("#spanPwd2").html("密码不能为空").css({"color":"#F00"});
			}else if(pwd2!=$("#password").val()){
				$("#spanPwd2").html("两次密码不一致").css({"color":"#F00"});
			}else{
				$("#spanPwd2").hide();
			}
		});
		
		//验证码
		$('#yzm').on('click',function(){
				var code =$('#spanyzm').html(Math.floor(Math.random()*9000)+1000);
				code.css({
				'font-size':40,
				'color':'red',
				'background':'gray'
				});	
				var yzm=$('#spanyzm').html();
				$('#ym').blur(function(){
					var ym=$('#ym').val();
					if(ym!=yzm){
						//console.log('ym的值：'+ym,'yzm的值：'+yzm)
						$('#spanyanm').html('验证码错误！').css({'color':'red'});
					}
					else{
						console.log("111")
						$('#spanyanm').html('');
					}
				})
				
		})
		
		// 注册按钮
		$('#btnLogin').on('click',function(){
			var ym=$('#ym').val();
			var yzm=$('#spanyzm').html();
			var paw=$('#password').val();
			var Usname=$('#username').val();
			$('#spanyzm').html('');
			if(ym!=yzm || paw=='' || Usname==''){
				alert('信息输入有误');
			}else{
				addCookie('Usname',$('#username').val());
				addCookie('paw',$('#password').val());
				alert('注册成功！');
				window.location.href="denglu.html";
			}
		})

});