jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 550,	
	$back_to_top = $('.backtop');
	$back_to_top.addClass('backtop-visible');
	var min_h = $(window).height()/2;
	$('.backtop').hide();
	//hide or show the "back to top" link
	$(window).scroll(function(){
		//( $(this).scrollTop() > offset ) ? $back_to_top.addClass('backtop-visible') : $back_to_top.removeClass('backtop-visible');
		if($(this).scrollTop()<min_h)
		{
			$('.backtop').hide();
		}
		else {
			$('.backtop').fadeIn('fast').css({bottom:0});
		}
	});
	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, offset
		);
	});
	//
	
	//
});
//wushi 2015-12-09 S
$(document).ready(function(){
	var temp_w = $(window).width();
	
	//
	if( temp_w < 1367 ){ 
			$(".right_Entry").css({ display:'none' , opacity:'0'} );
			$(".min_Entry").off("mouseover",mouseoverFn).show().stop().animate({right: '0'}, 500);	
			
	 }
	 
	//
	$(window).resize(function() {
		
		var temp_w = $(window).width();
	
		if( temp_w > 1367 ){
				
				$(".min_Entry").stop().animate({right: '-60px'}, 500, function(){ $(".right_Entry").show().stop().animate({opacity:'1'}, 500); });
			}
		else{
				$(".right_Entry").css({ display:'none' , opacity:'0'} );
				$(".min_Entry").off("mouseover",mouseoverFn).show().stop().animate({right: '0'}, 500);	
				//$(".min_Entry").off("mouseover",mouseoverFn);
			}
			
	});
	//
	$(".right_Entry .close").click(function(event){
			clickFn();
			event.stopPropagation();
	});
	function clickFn(){
			$(".min_Entry").off("mouseover",mouseoverFn);
			$(".right_Entry").css({ display:'none' , opacity:'0'} );
			$(".min_Entry").show().stop().animate({right: '0'}, 500,function(){ setTimeout(function () { $(".min_Entry").on("mouseover",mouseoverFn); }, 500); });
						
	}
			
	function mouseoverFn(){
			$(".min_Entry").stop().animate({right: '-60px'}, 500, function(){ $(".right_Entry").show().stop().animate({opacity:'1'}, 500); });
	}
	
	//
	
});
//wushi 2015-12-09 E
$(document).ready(function(){
	$(".bottomMenu li").hover(
	function(){
		$(this).find(".alertDiv").stop().show().animate({"right":"36px","opacity":"1"},300);
	},function(){
		$(this).find(".alertDiv").stop().show().animate({"right":"66px","opacity":"0"},300,function(){
			$(this).hide();	
		});
	});
	
});


