
;(function($){
	$(function(){
		var btn=$('#btnLogin');
		var Ousername=$('#username');
		var Opassword=$('#password');
		var pwd=getCookie("paw");
		var name=getCookie("Usname")
		btn.on('click',function(){
			//console.log("getCookie("Usname")的值"+getCookie("Usname"));
			var user=Ousername.val();
			var psw= Opassword.val();
			if(user ==name && psw ==pwd){
				alert('登陆成功！');
				window.location.href="../index.html#center";
			}else{
				alert('不存在');
			}
		});
	});
})(jQuery);
	