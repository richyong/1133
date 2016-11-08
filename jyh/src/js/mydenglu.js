
window.onload=function(){
	// 登录按钮
	var btnLogin = document.getElementById("btnLogin");
	var oCheck = document.getElementById("savePwd");
	var oUsername = document.getElementById("username");
	var oPassword = document.getElementById("password");
	var str = document.cookie;
	var obj = {};
	var arr = str.split("; ");
	for (var i = 0; i < arr.length; i++){
		var arr2 = arr[i].split("=");
		var name = arr2[0];
		var val = arr2[1];
		obj[name] = val;
	}
		
	if (obj.username && obj.password){
		oUsername.value = obj.username;
		oPassword.value = obj.password;
		alert("登录成功！");
	}
	btnLogin.onclick = function() {
		if (oCheck.checked){
			var strUsername = oUsername.value;
			var strPassword = oPassword.value;
			// 保存到cookie 中
			var oDate = new Date();
			oDate.setDate(oDate.getDate() + 1);
			document.cookie = "username="+strUsername+";expires=" + oDate;
			document.cookie = "password="+strPassword+";expires=" + oDate;
			
		}
	}

} 

