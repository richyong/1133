
;(function($){
	
	$(function(){
		$('.Ul').find('li').on('mouseenter',function(){
			$(this).find('img').css({
				'opacity':'0.5',
				'border':'1px solid red'
			})
			$('#b_bimg').attr('src','')
		})
		
		$('.Ul').find('li').on('mouseleave',function(){
			$(this).find('img').css({
				'opacity':'1',
				'border':'none'
			})
		})
	})
})(jQuery);
