
;(function($){
	$(function(){
		var box=$('.pic');
		var content=0;
		$.ajaxSetup({
			type:"get",
			url:"../data/mylist.json",
			async:true,
			success:function(res){
				//console.log(res);
				var ul = $('<ul/>');
				$.each(res, function(idx,obj) {  
					//console.log(obj.title);
					var _li=$('<li/>');
					var _img=$('<img/>')
					var _dl=$('<dl/>');
					var _dt=$('<dt/>').addClass('pht');
					var _dd=$('<dd/>').addClass('dd');
					var _p1=$('<p/>');
					var _p2=$('<p/>').addClass('page');
					var _span=$('<span/>');
					var _obtn=$('<button/>').addClass('active');
					//console.log(obj.img+"123");
					_img.attr("src","../css/images/"+obj.img).appendTo(_dt);
					_p1.html(obj.title).appendTo(_dd);
					_p2.html(obj.name).appendTo(_dd);
					_span.html(obj.price).appendTo(_p2);
					_obtn.html(obj.btn).appendTo(_dd);
					_dt.appendTo(_dl);
					_dd.appendTo(_dl);
					_dl.appendTo(_li);
					_li.appendTo(ul);
					content++;
				});
				ul.appendTo(box);
				//点击抢购跳转到详情页
				$('.active').on('click',function(){
					location.href="xiangqing.html";
				})
				
				//鼠标划过放大效果
				$('.pic').find('li').on('mouseenter',function(){
					$(this).find('img').css({
						'opacity':'0.5'
					})
				})
				$('.pic').find('li').on('mouseleave',function(){
					$(this).find('img').css({
						'opacity':'1'
					})
				})
			}
		});
		 $.ajax();
		
		$(window).on('scroll',function(){
			var scrolltop=$(window).scrollTop();
			if(scrolltop >=$(document).height()-$(window).height()-100){
				$.ajax();
//						if( content >4){
//							scrolltop=0;
//						}
				
			}
		});
		$(window).trigger('scroll')

	})
})(jQuery);
