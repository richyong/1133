
;(function($){
	$(function(){
		$.ajax({
			type:"get",
			url:"data/mylist.json",
			async:true,
			success:function(res){
				console.log(res);
				//var ul = $('<ul/>');
				
			}
		});
	})
})(jQuery);
